import type { Anime, Genre, Filter, AnimeType, Character } from 'src/types';

export async function getAnimes(queries: {
	filter?: Filter;
	limit?: number;
	type?: AnimeType;
}): Promise<Anime[]> {
	const url = `https://api.jikan.moe/v4/top/anime?filter=${queries.filter || ''}&limit=${
		queries.limit || 10
	}&type=${queries.type || 'tv'}`;
	const res = await fetch(url);
	const data = await res.json();
	return data.data.map((anime: any) => anime as Anime);
}

export async function getAllGenres(): Promise<Genre[]> {
	const res = await fetch('https://api.jikan.moe/v4/genres/anime');
	const data = await res.json();

	if (typeof data.data === typeof Array<Genre>()) {
		return data.data.map((genre: any) => genre as Genre);
	}

	return [{ name: 'Action', mal_id: 1 }];
}

export async function getRandomCharacter(): Promise<Character> {
	const res = await fetch('https://api.jikan.moe/v4/random/characters');
	const data = await res.json();
	return data.data as Character;
}
