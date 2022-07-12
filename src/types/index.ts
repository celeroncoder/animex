export type Genre = { name: string; mal_id: number };

export type Filter = 'airing' | 'upcoming' | 'bypopularity' | 'favorite';

export type AnimeType = 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music';

export type Anime = {
	title: string;
	images: {
		webp: {
			image_url: string;
			small_image_url: string;
			large_image_url: string;
		};
	};
	title_synonyms: string[];
	synopsis: string;
	airing: boolean;
	rank: number;
	genres: Genre[];
	score: number;
};

export type Character = {
	mal_id: number;
	images: {
		webp: {
			image_url: string;
			small_image_url: string;
		};
	};
	name: string;
	name_kanji: string;
	nicknames: string[];
	about: string;
};
