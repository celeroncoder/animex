import type { Anime, Genre } from 'src/types';

export async function getTopAnimes(): Promise<Anime[]> {
	const res = await fetch('https://api.jikan.moe/v4/top/anime');
	const data = await res.json();
	return data.data.map((anime: any) => anime as Anime);
}

export async function getAllGenres(): Promise<Genre[]> {
	const res = await fetch('https://api.jikan.moe/v4/genres/anime');
	const data = await res.json();
	return data.data.map((genre: any) => genre as Genre);
}
