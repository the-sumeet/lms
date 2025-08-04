import { db } from '$lib/db';
import { error, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = async ({ params, locals }) => {
	// Get user email from session (assuming you have auth setup)
	const userEmail = (await locals.getSession())?.user.email;

	if (!userEmail) {
		throw error(401, 'Authentication required');
	}

	// Get the specific user test
	const userTest = await db.userTest.findUnique({
		where: {
			id: params.user_test_id,
			userEmail // Ensure the user owns this test
		}
	});

	if (!userTest) {
		throw error(404, 'User test not found or access denied');
	}

	// Verify the test_id matches the user test
	if (userTest.testId !== params.test_id) {
		throw error(400, 'Invalid test ID for this user test');
	}

	// Get the test details
	const test = await db.test.findUnique({
		where: { id: params.test_id },
		include: {
			testQuestions: {
				include: {
					question: {
						select: {
							id: true,
							title: true,
							content: true,
							contentType: true,
							type: true,
							points: true,
							options: true
						}
					}
				},
				orderBy: { order: 'asc' }
			}
		}
	});

	if (!test || !test.isPublished) {
		throw error(404, 'Test not found');
	}

	// Check if test time has expired (if test has duration)
	if (test.duration && !userTest.isCompleted) {
		const currentTime = new Date();
		const testEndTime = new Date(userTest.startedAt.getTime() + test.duration * 60 * 1000);

		if (currentTime >= testEndTime) {
			// Mark test as completed due to timeout
			await db.userTest.update({
				where: { id: userTest.id },
				data: {
					isCompleted: true,
					submittedAt: currentTime
				}
			});

			// Redirect to results or show expired message
			// throw redirect(302, `/tests/${params.test_id}/results/${userTest.id}`);
		}
	}

	// If test is already completed, redirect to results
	// if (userTest.isCompleted) {
	// 	throw redirect(302, `/tests/${params.test_id}/results/${userTest.id}`);
	// }

	return {
		test,
		userTest
	};
};

export const actions: Actions = {
	submitAnswer: async ({ request, params, locals }) => {
		// Get user email from session
		const userEmail = (await locals.getSession())?.user.email;

		if (!userEmail) {
			return fail(401, { message: 'Authentication required' });
		}

		// Get form data
		const formData = await request.formData();

		// Verify user test exists and belongs to user
		const userTest = await db.userTest.findUnique({
			where: {
				id: params.user_test_id,
				userEmail
			}
		});

		if (!userTest) {
			return fail(404, { message: 'User test not found or access denied' });
		}

		// Prevent submitting if already completed
		if (userTest.isCompleted) {
			return fail(400, { message: 'Test already completed' });
		}

		try {
			// Get question ID and selected options from form data
			const questionId = formData.get('questionId') as string;
			const selectedOptions = formData.getAll('selectedOptions');

			if (!questionId) {
				return fail(400, { message: 'Question ID is required' });
			}

			// Upsert the answer record
			await db.answer.upsert({
				where: {
					userTestId_questionId: {
						userTestId: userTest.id,
						questionId: questionId
					}
				},
				update: {
					answer: { label: selectedOptions },
					updatedAt: new Date()
				},
				create: {
					userTestId: userTest.id,
					questionId: questionId,
					answer: { label: selectedOptions },
					isCorrect: null, // Will be calculated later
					points: 0 // Will be calculated later
				}
			});

			return { success: true, message: 'Answer submitted successfully!' };

		} catch (err) {
			console.error('Error submitting answer:', err);
			return fail(500, { message: 'Failed to submit answer' });
		}
	}
};