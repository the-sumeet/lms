<script>
	let { test } = $props();
	console.log(test);
</script>

<a href="/tests/{test.test.id}/take/{test.id}" class="flex flex-col gap-1 rounded-xl p-4 shadow-sm border border-gray-200">
	<p>Test</p>
	<h1 class="text-xl font-bold">{test.test.title}</h1>
	<p>On {new Date(test.startedAt).toLocaleString()}</p>

	<div class="flex items-center gap-2">
		{#if test.isCompleted}
			<span
				class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset"
				>Completed</span
			>
		{:else}
			<span
				class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset"
				>In Progress</span
			>
		{/if}
	</div>
</a>
