<script lang="ts">
	import Header from './Header.svelte';
	let { data }: { data: any } = $props();
</script>

<div class="flex flex-col items-center p-4">
	<div class="flex w-full flex-col gap-4  lg:max-w-6xl">
		<h1 class="text-xl font-bold">Activity</h1>

		{#each data.userTests as test (test.id)}
			<Header test={test} />
		{/each}
	</div>
</div>
