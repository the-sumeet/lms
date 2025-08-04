import { db } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// Get user email from session
	const userEmail = (await locals.getSession())?.user.email;
	
	if (!userEmail) {
		throw error(401, 'Authentication required');
	}

	// Fetch all user tests for the current user
	const userTests = await db.userTest.findMany({
		where: {
			userEmail
		},
		include: {
			test: {
				select: {
					id: true,
					title: true,
					description: true,
					totalPoints: true,
					duration: true
				}
			}
		},
		orderBy: {
			startedAt: 'desc'
		}
	});

	return {
		userTests
	};
};