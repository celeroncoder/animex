<script>
	import '../styles/app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="w-full overflow-x-hidden">
	<Navbar />
	<div class="flex w-full items-center justify-center bg-indigo-50 min-h-screen">
		<slot />
	</div>
</div>
