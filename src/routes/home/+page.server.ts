import { db } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const tests = await db.test.findMany({
		where: {
			isPublished: true
		},
		orderBy: {
			createdAt: 'desc'
		}
	});

	return {
		tests
	};
};