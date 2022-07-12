<script lang="ts">
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
	import type { Genre } from 'src/types';
	import GenreCard from '../Card/Genre.svelte';

	export let genres: Genre[];
	export let showExtend = true;

	let showingAll = showExtend ? false : true;
	$: shownGenres = showingAll ? genres : genres.slice(0, 25);

	const showAll = () => {
		showingAll = !showingAll;
	};
</script>

<div class="flex flex-wrap items-center gap-2 w-full duration-500">
	{#each shownGenres as genre}
		<GenreCard {genre} />
	{/each}
	{#if showExtend}
		<button
			on:click={showAll}
			class="p-1 rounded-md text-sm bg-indigo-300 hover:bg-indigo-200 focus-visible:outline-0  bg-opacity-70"
		>
			<ChevronDown class="duration-500 {showingAll && 'rotate-180'}" size={24} />
		</button>
	{/if}
</div>
