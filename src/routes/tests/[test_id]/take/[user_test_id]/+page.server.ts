import { db } from '$lib/db';
import { error, redirect } from '@sveltejs/kit';

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