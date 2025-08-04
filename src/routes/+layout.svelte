<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="fex w-full">
	<div class="flex h-screen flex-col">
		<div>
			<Navbar user={data?.user} />
		</div>
		<div class="flex-1 overflow-y-scroll">
			{@render children?.()}
		</div>
	</div>
</div>
