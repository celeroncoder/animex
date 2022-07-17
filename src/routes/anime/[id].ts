import type { RequestHandler } from '@sveltejs/kit';
import { getAnimeById } from '../../utils';

export const get: RequestHandler = async ({ params }) => {
	try {
		const id = parseInt(params.id);

		const anime = await getAnimeById(id, true);

		return {
			status: 200,
			body: {
				anime
			}
		};
	} catch (err) {
		return {
			status: 404
		};
	}
};
