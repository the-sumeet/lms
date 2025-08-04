import { db } from '$lib/db';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
	// Get user email from session (assuming you have auth setup)
	const userEmail = (await locals.getSession())?.user.email;
	
	if (!userEmail) {
		throw error(401, 'Authentication required');
	}

	// Check if test exists
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

	// Check if user already has an active test session
	let userTest = await db.userTest.findFirst({
		where: {
			userEmail,
			testId: params.test_id,
			isCompleted: false
		}
	});

	// If no active session, create a new one
	if (!userTest) {
		userTest = await db.userTest.create({
			data: {
				userEmail,
				testId: params.test_id,
				totalPoints: test.totalPoints,
				startedAt: new Date()
			}
		});
	} else if (test.duration) {
		// Check if test time has expired
		const currentTime = new Date();
		const testEndTime = new Date(userTest.startedAt.getTime() + test.duration * 60 * 1000);
		
		if (currentTime >= testEndTime && !userTest.isCompleted) {
			// Mark test as completed due to timeout
			userTest = await db.userTest.update({
				where: { id: userTest.id },
				data: {
					isCompleted: true,
					submittedAt: currentTime
				}
			});
		}
	}

	// Redirect to the specific user test route
	throw redirect(302, `/tests/${params.test_id}/take/${userTest.id}`);
};