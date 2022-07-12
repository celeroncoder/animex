import type { RequestHandler } from '@sveltejs/kit';
import { getAllGenres, getTopAnimes } from '../utils';

export const get: RequestHandler = async () => {
	return {
		status: 200,
		body: {
			animes: await getTopAnimes(),
			genres: await getAllGenres()
		}
	};
};
