<script lang="ts">
	import type { Character } from 'src/types';

	export let character: Character;
</script>

<div class="flex items-center gap-x-2 rounded-lg h-96 border-2 border-indigo-900">
	<img
		src={character.images.webp.image_url}
		alt={character.name}
		class="w-72 h-full rounded-l-lg"
	/>
	<div class="flex justify-center flex-col gap-4">
		<div>
			<p class="text-xl">{character.name}</p>
			<p class="text-xs">{character.name_kanji}</p>
		</div>
		{#if character.nicknames.length > 0}
			<p class="text-indigo-700">{character.nicknames.map((name) => `"${name}"`).join(', ')}</p>
		{/if}
		{#if character.about}
			<p>{character.about.split(' ').slice(0, 20).join(' ')}...</p>
		{/if}
	</div>
</div>
