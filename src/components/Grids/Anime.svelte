<script lang="ts">
	import type { Anime } from 'src/types';
	import AnimeCard from '../Card/Anime.svelte';
	export let animes: Anime[];
</script>

<div class="flex flex-wrap gap-10">
	{#each animes as anime}
		<AnimeCard {anime} />
	{/each}
</div>
