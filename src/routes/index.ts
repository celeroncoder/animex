import type { RequestHandler } from '@sveltejs/kit';
import { getAllGenres, getAnimes } from '../utils';

export const get: RequestHandler = async () => {
	return {
		status: 200,
		body: {
			popularAnimes: await getAnimes({ filter: 'bypopularity', limit: 20, type: 'tv' }),
			topAiringAnimes: await getAnimes({ limit: 5, filter: 'airing' }),
			topUpcomingAnimes: await getAnimes({ limit: 5, filter: 'upcoming' }),
			topRankedAnimes: await getAnimes({ limit: 5 }),
			allGenres: await getAllGenres()
		}
	};
};
