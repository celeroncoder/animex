<script lang="ts">
	import type { Anime, Genre } from 'src/types';
	import AnimeGrid from '../components/Grids/Anime.svelte';
	import GenreGrid from '../components/Grids/Genre.svelte';

	export let animes: Anime[];
	export let genres: Genre[];
</script>

<div class="flex flex-col w-full items-center justify-center p-8 gap-10">
	<GenreGrid {genres} />
	<h1 class="text-indigo-900 text-2xl">Top Animes</h1>
	<AnimeGrid {animes} />
</div>
