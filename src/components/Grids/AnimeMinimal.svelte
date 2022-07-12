<script lang="ts">
	import type { Anime } from 'src/types';
	import AnimeCardMinimal from '../Card/AnimeMinimal.svelte';
	export let animes: Anime[];
	export let showRank: boolean = true;
	export let title: string;
</script>

<div class="flex flex-col border-2 border-indigo-900 rounded-lg">
	<div class="bg-indigo-900 text-white rounded-t-lg p-2">
		<p>{title}</p>
	</div>
	<div class="p-2 flex flex-col items-center gap-y-2">
		{#each animes as anime}
			<AnimeCardMinimal {showRank} {anime} />
		{/each}
	</div>
</div>
