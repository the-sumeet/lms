<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { page } from '$app/state';
	import Sidebar from './Sidebar.svelte';
	import { appState } from '../appState.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<title>NiyogiIAS</title>
</svelte:head>

<div class="fex w-full">
	<div class="flex h-screen flex-col">
		{#if page.url.pathname !== '/'}
			<div class="md:hidden">
				<Navbar user={data?.user} />
			</div>
		{/if}

		<div class="h-full flex-1 overflow-y-hidden">
			<div class="flex h-full">
				{#if page.url.pathname !== '/'}
					<div class="{appState.mobileSidebarOpened ? '' : 'hidden'} h-full md:w-md md:max-w-64 md:block">
						<Sidebar />
					</div>
				{/if}

				<div class="flex-1 h-full">
					{@render children?.()}
				</div>
			</div>
		</div>
	</div>
</div>
