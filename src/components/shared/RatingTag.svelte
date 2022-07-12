<script lang="ts">
	import StarFilled from 'carbon-icons-svelte/lib/StarFilled.svelte';
	export let score: number;
</script>

<div class="bg-indigo-300 flex items-center gap-x-2 hover:bg-indigo-200 rounded p-1 px-2 min-w-fit">
	<StarFilled size={16} />
	<p>{score} / 10</p>
</div>
