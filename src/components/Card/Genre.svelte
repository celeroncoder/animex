<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Genre } from 'src/types';
	export let genre: Genre;
</script>

<div
	transition:fly={{ y: -20, duration: 500 }}
	class="px-3 py-1 rounded-md text-sm bg-indigo-400 bg-opacity-70 cursor-pointer"
>
	<p>{genre.name}</p>
</div>
