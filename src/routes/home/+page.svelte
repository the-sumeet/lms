<script>
	import TestsGrid from './TestsGrid.svelte';

	let { data } = $props();

	console.log(data);
</script>

<div class="flex flex-col items-center p-4">
	<div class="mt-4 flex lg:max-w-6xl w-full flex-col">
		<!-- Tests -->

		<div class="w-full flex flex-col gap-4">
            <h1 class="text-xl font-bold">Tests</h1>
			<TestsGrid tests={data.tests}/>
		</div>
	</div>
</div>
