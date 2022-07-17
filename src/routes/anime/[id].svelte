<script lang="ts">
	import Blinking from '../../components/shared/Blinking.svelte';

	import type { Anime } from 'src/types';
	import GenreGrid from '../../components/Grids/Genre.svelte';

	export let anime: Anime;

	console.log(anime);
</script>

<svelte:head>
	<title>Animex | {anime.title}</title>
</svelte:head>

<div class="w-full flex items-start justify-start p-8 gap-10">
	<!-- main image -->
	<div
		style="flex:0.2;"
		class="flex w-full flex-col items-center text-center justify-center relative gap-1"
	>
		<img
			src={anime.images.webp.large_image_url}
			alt={anime.title}
			class="rounded-lg w-full cursor-pointer"
		/>
		{#if anime.airing}
			<p
				class="absolute flex top-0 right-0 rounded-tr-lg rounded-bl-lg bg-red-500 py-1 px-2 text-sm text-white"
			>
				<Blinking />
				Live
			</p>
		{/if}
		<p class="text-2xl font-medium">{anime.title}</p>
		<p>[ {anime.type} ]</p>
		<p class="text-sm">{anime.title_synonyms.join(', ')}</p>
		<p class="text-sm underline underline-offset-1">{anime.rating}</p>
		<p class="text-sm">Aired from {anime.aired.string}</p>
		<p class="text-sm">
			{anime.episodes} Episode{anime.episodes > 1 ? 's' : ''} ~ {anime.duration}
		</p>
	</div>
	<!-- details -->
	<div style="flex:0.8;" class="flex items-start justify-start gap-10">
		<!-- scoreboard -->
		<div class="flex flex-col px-4 items-center justify-between gap-4 bg-indigo-100 rounded-lg">
			<!-- The score -->
			<div
				class="flex flex-col items-center justify-center gap-2 w-44 h-32 border-b-2 border-indigo-900"
			>
				<p class="bg-indigo-300 px-2 text-sm uppercase">score</p>
				<p class="text-2xl font-semibold">{anime.score}</p>
				<p class="text-sm">{anime.scored_by.toLocaleString()} users</p>
			</div>
			<!-- ranking -->
			<div
				class="flex items-center justify-center flex-col gap-2 w-44 h-32 border-b-2 border-indigo-900"
			>
				<p>Ranked</p>
				<p class="text-2xl font-semibold">#{anime.rank}</p>
			</div>
			<!-- popularity -->
			<div
				class="flex items-center justify-center flex-col gap-2 w-44 h-32 border-b-2 border-indigo-900"
			>
				<p>Popularity</p>
				<p class="text-2xl font-semibold">#{anime.popularity}</p>
			</div>
			<!-- members -->
			<div class="flex items-center justify-center flex-col gap-2 min-h-full w-44 h-32">
				<p>Members</p>
				<p class="text-2xl font-semibold">{anime.members.toLocaleString()}</p>
			</div>
		</div>

		<!-- lofty details -->
		<div class="flex h-full items-start justify-center flex-col gap-5 max-w-4xl">
			<!-- head -->
			<div class="flex flex-col gap-2 items-start justify-start">
				<p class="text-3xl font-semibold">{anime.title}</p>
				<p>{anime.title_japanese}</p>

				<!-- producers -->
				{#if anime.producers.length > 0}
					<p class="flex gap-2 text-sm">
						Produced by:
						{#each anime.producers as producer}
							<a class="inline underline text-indigo-600" alt={producer.name} href={producer.url}
								>{producer.name}</a
							>
						{/each}
					</p>
				{/if}

				<!-- licensors -->
				{#if anime.licensors.length > 0}
					<p class="flex gap-2 text-sm">
						Licensed by:
						{#each anime.licensors as licensor}
							<a class="inline underline text-indigo-600" alt={licensor.name} href={licensor.url}
								>{licensor.name}</a
							>
						{/each}
					</p>
				{/if}

				<!-- studios -->
				{#if anime.studios.length > 0}
					<p class="flex gap-2 text-sm">
						Studios:
						{#each anime.studios as studio}
							<a class="inline underline text-indigo-600" alt={studio.name} href={studio.url}
								>{studio.name}</a
							>
						{/each}
					</p>
				{/if}
			</div>

			<!-- trailer -->
			{#if anime.trailer}
				<div class="flex flex-col gap-2 items-start justify-start">
					<iframe
						height="375"
						width="700"
						class="rounded-lg"
						src="{anime.trailer.embed_url}?mute=1"
						frameborder="0"
						title={anime.title}
					/>
				</div>
			{/if}

			<!-- tags - genres & themes -->
			<div class="flex items-center justify-start gap-4 flex-wrap">
				<!-- Genres -->
				<div class="flex flex-col gap-2 items-start justify-start">
					<p class="text-xl">Genres</p>
					<GenreGrid genres={anime.genres} showExtend={false} />
				</div>

				<!-- themes -->
				<div class="flex flex-col gap-2 items-start justify-start">
					<p class="text-xl">Themes</p>
					<GenreGrid genres={anime.themes} showExtend={false} />
				</div>
			</div>

			<!-- Synopsis -->
			<div class="flex flex-col gap-2 items-start justify-start">
				<p class="text-2xl font-semibold">Synopsis</p>
				<p>{anime.synopsis}</p>
			</div>

			<!-- background -->
			{#if anime.background}
				<div class="flex flex-col gap-2 items-start justify-start">
					<p class="text-2xl font-semibold">Background</p>
					<p>{anime.background}</p>
				</div>
			{/if}

			<!-- Streams -->
			{#if anime.streaming}
				<div class="flex flex-col gap-2 items-start justify-start">
					<p class="text-xl">Streaming</p>
					<p>
						{#each anime.streaming as stream}
							<a
								class="text-indigo-600 underline underline-offset-2"
								href={stream.url}
								target="_blank"
							>
								{stream.name}
							</a>
						{/each}
					</p>
				</div>
			{/if}

			<!-- Relations -->
			{#if anime.relations}
				<div class="flex flex-col gap-2 items-start justify-start">
					<p class="text-2xl font-semibold">Related Anime</p>
					{#each anime.relations as relation}
						<div class="flex gap-4">
							<p class="font-semibold">{relation.relation}</p>
							<p class="flex gap-2">
								{#each relation.entry as entry}
									<a
										class="inline underline text-indigo-600"
										alt={entry.name}
										href="/{entry.type === 'anime' ? 'anime' : 'manga'}/{entry.mal_id}"
										>{entry.name}</a
									>
								{/each}
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
