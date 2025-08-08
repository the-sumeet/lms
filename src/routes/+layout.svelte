<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { page } from '$app/state';
	import Sidebar from './Sidebar.svelte';
	import { appState } from '../appState.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="fex w-full">
	<div class="flex h-screen flex-col">
		{#if page.url.pathname !== '/'}
			<div>
				<Navbar user={data?.user} />
			</div>
		{/if}

		<div class="h-full flex-1 overflow-y-hidden">
			<div class="flex h-full">
				{#if page.url.pathname !== '/'}
					<div class="hidden h-full w-md max-w-64 md:block">
						<Sidebar />
					</div>
				{/if}

				<div class="flex-1">
					{@render children?.()}
				</div>
			</div>
		</div>
	</div>
</div>
