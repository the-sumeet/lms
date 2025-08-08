<script>
	import AdBanner from './AdBanner.svelte';
import CourseGrid from './CourseGrid.svelte';

	let { data } = $props();

</script>

<div class="flex flex-col items-center p-4 h-full overflow-y-auto">
	<!-- Ad Banner -->
	<div class="mb-8 w-full max-w-7xl">
		<AdBanner />
	</div>

	<div class="mt-4 flex lg:max-w-7xl w-full flex-col ">

		<!-- Courses -->
		<div class="shadow border border-gray-200 rounded-xl p-4 w-full flex flex-col gap-4 bg-gradient-to-r from-pink-100 to-purple-100 ">
            <h1 class="text-xl font-bold">Courses</h1>
			<CourseGrid />
		</div>

	</div>
</div>
