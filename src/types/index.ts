export type Genre = { name: string; mal_id: number };

export type Filter = 'airing' | 'upcoming' | 'bypopularity' | 'favorite';

export type AnimeType = 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music';

export type Entry = { mal_id: number; name: string; type: string; url: string };

export type Anime = {
	title: string;
	title_japanese: string;
	title_synonyms: string[];
	images: {
		webp: {
			image_url: string;
			small_image_url: string;
			large_image_url: string;
		};
	};
	synopsis: string;
	background: string;
	airing: boolean;
	rank: number;
	genres: Genre[];
	themes: Genre[];
	score: number;
	mal_id: number;
	members: number;
	scored_by: number;
	popularity: number;
	type: AnimeType;
	streaming: {
		name: string;
		url: string;
	}[];
	aired: {
		string: string;
	};
	episodes: number;
	duration: string; // episode duration - average
	relations: {
		entry: Entry[];
		relation: string;
	}[];
	rating: string;
	producers: Entry[];
	licensors: Entry[];
	studios: Entry[];
	trailer: {
		embed_url: string;
		url: string;
	};
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
