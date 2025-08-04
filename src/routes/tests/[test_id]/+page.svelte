<script>
	import Header from './Header.svelte';

	let { data } = $props();
	console.log(data);
</script>

<div class="flex flex-col items-center p-4">
	<div class="mt-4 flex w-full flex-col lg:max-w-6xl">
		<Header test={data.test} />
	</div>
</div>
