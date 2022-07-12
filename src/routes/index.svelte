<script lang="ts">
	import type { Anime, Genre } from 'src/types';
	import AnimeGrid from '../components/Grids/Anime.svelte';
	import AnimeGridMinimal from '../components/Grids/AnimeMinimal.svelte';
	import GenreGrid from '../components/Grids/Genre.svelte';

	export let popularAnimes: Anime[];
	export let topAiringAnimes: Anime[];
	export let topUpcomingAnimes: Anime[];
	export let topRankedAnimes: Anime[];
	export let allGenres: Genre[];
</script>

<svelte:head>
	<title>Animex</title>
</svelte:head>

<div class="flex flex-col w-full justify-center p-8 gap-10">
	<GenreGrid genres={allGenres} />
	<h1 class="text-indigo-900 text-2xl">Most Popular Animes</h1>
	<div class="flex gap-2 w-full">
		<div style="flex:0.8;" class="max-w-fit">
			<AnimeGrid animes={popularAnimes} />
		</div>
		<div style="flex:0.2" class="flex flex-col gap-y-4">
			<AnimeGridMinimal animes={topAiringAnimes} title="Top Airing Animes" />
			<AnimeGridMinimal animes={topUpcomingAnimes} showRank={false} title="Top Upcoming Animes" />
			<AnimeGridMinimal animes={topRankedAnimes} title="Top Ranked Animes" />
		</div>
	</div>
</div>
