<script>
	import '../styles/app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="w-full">
	<Navbar />
	<div class="flex w-full items-center justify-center bg-indigo-50">
		<slot />
	</div>
</div>
