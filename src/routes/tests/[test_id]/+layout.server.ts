import { db } from '$lib/db';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const test = await db.test.findUnique({
		where: {
			id: params.test_id
		},
		include: {
			testQuestions: {
				orderBy: {
					order: 'asc'
				},
				include: {
					question: {
						include: true
					}
				}
			}
		}
	});

	if (!test) {
		throw error(404, 'Test not found');
	}

	return {
		test
	};
};