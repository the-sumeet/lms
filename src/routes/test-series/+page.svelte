<script>
	import TestsByCategories from './TestsByCategories.svelte';
	import YourTests from './YourTests.svelte';
</script>

<div class="flex h-full flex-col items-center gap-8 overflow-y-auto p-4">
	<!-- Your tests -->
	<div class="flex w-full max-w-7xl flex-col gap-4">
		<h1 class="w-fit text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Your Tests</h1>
		<YourTests />
	</div>

	<!-- tests by categories -->
	<div class="flex w-full max-w-7xl flex-col gap-4">
		<h1 class="w-fit text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Tests by Categories</h1>
		<div class="rounded-xl border border-gray-200 p-4">
			<TestsByCategories />
		</div>
	</div>
</div>
