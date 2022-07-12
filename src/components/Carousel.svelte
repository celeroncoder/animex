<script lang="ts">
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	// @ts-ignore
	import Carousel from '@beyonk/svelte-carousel';
	import type { Anime } from 'src/types';
	import Blinking from './shared/Blinking.svelte';
	import GenreGrid from './Grids/Genre.svelte';
	import RatingTag from './shared/RatingTag.svelte';
	export let animes: Anime[];
</script>

<div class="flex w-4/6 items-center justify-center border-2 border-indigo-900 rounded-lg">
	<Carousel perPage={1} dots={false}>
		<span class="control" slot="left-control">
			<ChevronLeft size={32} />
		</span>
		{#each animes as anime}
			<div class="h-96 flex items-center gap-x-8 rounded-lg">
				<img
					class="w-96 h-full rounded-l-lg"
					src={anime.images.webp.large_image_url}
					alt={anime.title}
				/>
				<div class="flex flex-col gap-y-4">
					<p>#{anime.rank}</p>
					<div class="flex w-96 items-start gap-x-2">
						<p class="text-2xl">{anime.title}</p>
						<RatingTag score={anime.score} />
					</div>
					{#if anime.airing}
						<div
							class="px-3 py-1 flex w-fit rounded-md text-sm text-white bg-red-500 hover:bg-opacity-70 cursor-pointer"
						>
							<Blinking />
							Live
						</div>
					{/if}
					<div class="text-sm w-96 flex flex-col justify-center gap-y-2">
						<p>
							<span class="font-semibold">Other Titles:</span>
							{anime.title_synonyms.map((title) => `"${title}"`).join(', ')}
						</p>
						<p>{anime.synopsis.split(' ').slice(0, 20).join(' ')}...</p>
					</div>
					<GenreGrid genres={anime.genres} showExtend={false} />
				</div>
			</div>
		{/each}
		<span class="control" slot="right-control">
			<ChevronRight size={32} />
		</span>
	</Carousel>
</div>
