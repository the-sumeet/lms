<script>
	import AdBanner from './AdBanner.svelte';
	import CourseGrid from './CourseGrid.svelte';

	let { data } = $props();
</script>

<div class="flex h-full flex-col items-center overflow-y-auto p-4">
	<!-- Ad Banner -->
	<div class="mb-8 w-full max-w-7xl">
		<AdBanner />
	</div>

	<div class="mt-4 flex w-full flex-col lg:max-w-7xl">
		<!-- Courses -->
		<div
			class="flex w-full flex-col gap-4 rounded-xl border border-gray-200 bg-gray-100 p-4 shadow-md"
		>
			<h1
				class="w-fit bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent"
			>
				Courses
			</h1>

			<CourseGrid />
		</div>
	</div>
</div>
