export type Genre = { name: string; mal_id: number };

export type Anime = {
	title: string;
	images: {
		webp: {
			image_url: string;
			small_image_url: string;
			large_image_url: string;
		};
	};
	airing: boolean;
	rank: number;
	genres: Genre[];
};
