<script lang="ts">
	import type { Anime } from 'src/types';
	export let anime: Anime;
</script>

<div
	class="flex flex-col items-center relative shadow-md duration-500 hover:shadow-2xl rounded-lg h-96 w-64 cursor-pointer"
>
	<!-- Rank Badge -->
	<p
		class="absolute flex top-0 left-0 rounded-tl-lg rounded-br-lg bg-indigo-500 bg-opacity-70 py-2 px-4 text-lg text-white"
	>
		#{anime.rank}
	</p>

	<!-- Live Badge -->
	{#if anime.airing}
		<p
			class="absolute flex top-0 right-0 rounded-tr-lg rounded-bl-lg bg-red-500 py-1 px-2 text-sm text-white"
		>
			<svg height="20" width="20" class="blinking">
				<circle cx="7" cy="10" r="4" fill="white" />
				Sorry, your browser does not support inline SVG.
			</svg>
			Live
		</p>
	{/if}

	<img src={anime.images.webp.image_url} class="h-80 w-full rounded-t-lg" alt={anime.title} />
	<div class="h-16 flex items-center justify-center w-full">
		<p class="text-center text-indigo-900">{anime.title}</p>
	</div>
</div>
