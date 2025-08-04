<script>

    let {test, expired } = $props();
</script>
<div class="overflow-hidden rounded-lg bg-white shadow">
	<h2 id="profile-overview-title" class="sr-only">Profile Overview</h2>
	<div class="bg-white p-6">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div class="sm:flex sm:space-x-5">
				<div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
					<p class="text-sm font-medium text-gray-600">Welcome back,</p>
					<p class="text-xl font-bold text-gray-900 sm:text-2xl">{test.title}</p>
					<p class="text-sm font-medium text-gray-600">Product Designer</p>
				</div>
			</div>
			<div class="mt-5 flex justify-center sm:mt-0">
				{#if !expired}
				<a href="/tests/{test.id}/take" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</a>
				{:else}
				<a href="/tests/{test.id}/take" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Test Ended</a>
				{/if}
			</div>
		</div>
	</div>
	<div
		class="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
	>
		<div class="px-6 py-5 text-center text-sm font-medium">
			<span class="text-gray-900">{test.testQuestions.length}</span>
			<span class="text-gray-600">Question(s)</span>
		</div>
		<div class="px-6 py-5 text-center text-sm font-medium">
			<span class="text-gray-900">{test.duration}</span>
			<span class="text-gray-600">Minutes</span>
		</div>
		<div class="px-6 py-5 text-center text-sm font-medium">
			<span class="text-gray-900">{test.totalPoints}</span>
			<span class="text-gray-600">Points</span>
		</div>
	</div>
</div>
