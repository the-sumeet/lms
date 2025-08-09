<script>
	let lst = [
		'GATE',
		'UPSC',
		'Railway',
		'SSC',
		'Banking',
		'Civil',
		'Police',
		'GATE',
		'UPSC',
		'Railway',
		'SSC',
		'Banking',
		'Civil',
		'Police',
		'GATE',
		'UPSC',
		'Railway',
		'SSC',
		'Banking',
		'Civil',
		'Police'
	];

	let items = 10;
</script>

<div class="flex h-[512px] flex-col overflow-y-auto md:flex-row">
	<select class="border border-gray-200 p-2 rounded-md md:hidden" name="categories" id="categories">
		{#each lst as item}
			<option value={item}>{item}</option>
		{/each}
	</select>

	<!-- Sidebar -->
	<div class="hidden max-w-48 flex-col overflow-y-auto rounded-xl p-4 md:flex">
		{#each lst as item}
			<div class="p-2">
				<a href="/test-series/{item}" class="block rounded p-2 hover:bg-gray-200">
					{item}
				</a>
			</div>
		{/each}
	</div>

	<div class="overflow-y-auto">
		<div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{#each Array(10) as _, i}
					<div class="flex flex-col rounded-lg border border-gray-200 p-4 justify-between min-h-80 bg-gradient-to-b from-pink-200 via-white to-white">
						<div class="flex flex-col gap-2">
							<h1 class="text-xl">SBI Clerk Mock Test Series 2025 - 26 (Pre + Mains)</h1>
							<p>100 tests | <span class="text-green-500">3 free tests</span></p>

							<ul class="list-disc pl-3 text-gray-400">
								<li>22 Full Test (Prelims)</li>
								<li>15 Sectional Test (Prelims)</li>
								<li>81 Chapter Test (Prelims)</li>
							</ul>
						</div>

                        <button class="btn-secondary">Go to test series</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
