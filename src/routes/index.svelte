<script lang="ts">
	import type { Anime, Character, Genre } from 'src/types';
	import AnimeGrid from '../components/Grids/Anime.svelte';
	import AnimeGridMinimal from '../components/Grids/AnimeMinimal.svelte';
	import GenreGrid from '../components/Grids/Genre.svelte';
	import AnimeCarousel from '../components/Carousel.svelte';
	import LargeCharacterCard from '../components/Card/Character/Large.svelte';

	export let popularAnimes: Anime[];
	export let topAiringAnimes: Anime[];
	export let topUpcomingAnimes: Anime[];
	export let topRankedAnimes: Anime[];
	export let allGenres: Genre[];
	export let randomCharacter: Character;
</script>

<svelte:head>
	<title>Animex</title>
</svelte:head>

<div class="flex flex-col w-full justify-center p-8 gap-10">
	<GenreGrid genres={allGenres} />
	<h1 class="text-indigo-900 text-3xl font-semibold">Most Popular Animes</h1>

	<div class="flex gap-8 w-full">
		<div style="flex:0.8;" class="w-3/4 flex flex-col gap-y-4">
			<div class="flex items-center gap-4 justify-between">
				<AnimeCarousel animes={popularAnimes.slice(0, 5)} />
				<LargeCharacterCard character={randomCharacter} />
			</div>
			<AnimeGrid animes={popularAnimes.slice(5)} />
		</div>
		<div style="flex:0.2" class="w-1/4 flex flex-col gap-y-4">
			<AnimeGridMinimal animes={topAiringAnimes} title="Top Airing Animes" />
			<AnimeGridMinimal animes={topUpcomingAnimes} showRank={false} title="Top Upcoming Animes" />
			<AnimeGridMinimal animes={topRankedAnimes} title="Top Ranked Animes" />
		</div>
	</div>
</div>
