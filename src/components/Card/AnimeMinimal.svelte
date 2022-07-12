<script lang="ts">
	import type { Anime } from 'src/types';
	export let anime: Anime;
	export let showRank: boolean;
</script>

<div class="flex items-center gap-2 w-full cursor-pointer">
	<img src={anime.images.webp.image_url} class="h-24 w-16 rounded-lg" alt={anime.title} />
	<div class="flex flex-col justify-center">
		{#if showRank}
			<p>#{anime.rank}</p>
		{/if}
		<p class="text-left text-sm">{anime.title}</p>
	</div>
</div>
