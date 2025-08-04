<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';

	Chart.register(...registerables);

	let chartCanvas: HTMLCanvasElement;
	let chart: Chart;
	let comparisonChartCanvas: HTMLCanvasElement;
	let comparisonChart: Chart;

	// Sample data - replace with actual data from props or API
	const subjectAccuracy = [
		{ subject: 'Mathematics', accuracy: 85 },
		{ subject: 'Science', accuracy: 72 },
		{ subject: 'English', accuracy: 90 },
		{ subject: 'History', accuracy: 68 },
		{ subject: 'Geography', accuracy: 75 }
	];

	// Comparison data for You vs Topper vs Average
	const comparisonData = {
		you: 75,
		topper: 95,
		average: 68
	};

	function createChart() {
		if (!chartCanvas) return;

		const ctx = chartCanvas.getContext('2d');
		if (!ctx) return;

		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: subjectAccuracy.map((item) => item.subject),
				datasets: [
					{
						label: 'Accuracy (%)',
						data: subjectAccuracy.map((item) => item.accuracy),
						backgroundColor: [
							'rgba(59, 130, 246, 0.8)', // Blue
							'rgba(16, 185, 129, 0.8)', // Green
							'rgba(245, 158, 11, 0.8)', // Yellow
							'rgba(239, 68, 68, 0.8)', // Red
							'rgba(139, 92, 246, 0.8)' // Purple
						],
						borderColor: [
							'rgba(59, 130, 246, 1)',
							'rgba(16, 185, 129, 1)',
							'rgba(245, 158, 11, 1)',
							'rgba(239, 68, 68, 1)',
							'rgba(139, 92, 246, 1)'
						],
						borderWidth: 1
					}
				]
			},
			options: {
				indexAxis: 'y', // This makes it horizontal
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
					}
				},
				scales: {
					x: {
						beginAtZero: true,
						max: 100,
						ticks: {
							callback: function (value) {
								return value + '%';
							}
						}
					},
					y: {
						ticks: {
							font: {
								size: 12
							}
						}
					}
				}
			}
		});
	}

	function createComparisonChart() {
		if (!comparisonChartCanvas) return;

		const ctx = comparisonChartCanvas.getContext('2d');
		if (!ctx) return;

		comparisonChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['You', 'Topper', 'Average'],
				datasets: [
					{
						label: 'Score (%)',
						data: [comparisonData.you, comparisonData.topper, comparisonData.average],
						backgroundColor: [
							'rgba(59, 130, 246, 0.8)', // Blue for You
							'rgba(34, 197, 94, 0.8)', // Green for Topper
							'rgba(156, 163, 175, 0.8)' // Gray for Average
						],
						borderColor: [
							'rgba(59, 130, 246, 1)',
							'rgba(34, 197, 94, 1)',
							'rgba(156, 163, 175, 1)'
						],
						borderWidth: 1,
						barPercentage: 0.4,
						categoryPercentage: 0.8,
						borderRadius: {
							topLeft: 8,
							topRight: 8,
							bottomLeft: 0,
							bottomRight: 0
						},
						borderSkipped: false
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						max: 100,
						ticks: {
							callback: function (value) {
								return value + '%';
							}
						}
					},
					x: {
						ticks: {
							font: {
								size: 12,
								weight: 'bold'
							}
						}
					}
				}
			}
		});
	}

	onMount(() => {
		createChart();
		createComparisonChart();

		return () => {
			if (chart) {
				chart.destroy();
			}
			if (comparisonChart) {
				comparisonChart.destroy();
			}
		};
	});
</script>

<div class="">
	<div class="shadow-md-rounded-xl rounded-xl border border-gray-200 p-4 shadow-md">
		<h3 class="text-xl">Test stats</h3>

		<!-- Percentile, Accuracy, Attempted -->
		<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			<div
				class="relative overflow-hidden rounded-lg border border-gray-200 bg-white px-4 pt-5 sm:px-6 sm:pt-6"
			>
				<dt>
					<div class="absolute rounded-md bg-red-200 p-3">
						<i class="bi bi-person-fill px-1 text-xl text-red-600"></i>
					</div>
					<p class="ml-16 truncate text-sm font-medium text-gray-500">Percentile</p>
				</dt>
				<dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
					<p class="text-2xl font-semibold text-gray-900">5%</p>
				</dd>
			</div>
			<div
				class="relative overflow-hidden rounded-lg border border-gray-200 bg-white px-4 pt-5 sm:px-6 sm:pt-6"
			>
				<dt>
					<div class="absolute rounded-md bg-green-200 p-3">
						<i class="bi bi-brightness-high-fill px-1 text-xl text-green-600"></i>
					</div>
					<p class="ml-16 truncate text-sm font-medium text-gray-500">Accuracy</p>
				</dt>
				<dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
					<p class="text-2xl font-semibold text-gray-900">58.16%</p>
				</dd>
			</div>
			<div
				class="relative overflow-hidden rounded-lg border border-gray-200 bg-white px-4 pt-5 sm:px-6 sm:pt-6"
			>
				<dt>
					<div class="absolute rounded-md bg-blue-200 p-3">
						<i class="bi bi-list-check px-1 text-xl text-blue-600"></i>
					</div>
					<p class="ml-16 truncate text-sm font-medium text-gray-500">Attempted</p>
				</dt>
				<dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
					<p class="text-2xl font-semibold text-gray-900">0/100</p>
				</dd>
			</div>
		</dl>

		<!-- Correct, incorrect, unattempted -->
		<div class="mt-4 flex w-full items-center justify-center gap-4">
			<span
				class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/10 ring-inset"
				>Correct: 0</span
			>
			<span
				class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset"
				>Incorrect: 0</span
			>
			<span
				class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-600/10 ring-inset"
				>Unattempted: 100</span
			>
		</div>
	</div>

	<!-- Horizontal bar chart -->
	<div class="mt-4 rounded-xl border border-gray-200 p-4 shadow-md">
		<h4 class="text-xl">Topic wise strengths and weaknesses</h4>
		<div class="rounded-lg bg-white p-4">
			<canvas bind:this={chartCanvas} width="400" height="200"></canvas>
		</div>
	</div>

	<!-- You topper average -->
	<div class="mt-4 rounded-xl border border-gray-200 p-4 shadow-md">
		<h4 class="mb-4 text-xl">Comparison</h4>

		<div class="flex flex-wrap justify-center gap-2">
			<button
				type="button"
				class="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Score</button
			>

			<button
				type="button"
				class="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
				>Accuracy</button
			>
			<button
				type="button"
				class="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
				>Attempt</button
			>
			<button
				type="button"
				class="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
				>Correct</button
			>
			<button
				type="button"
				class="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
				>Incorrect</button
			>
			<button
				type="button"
				class="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
				>Time</button
			>
		</div>
		<div class="rounded-lg bg-white p-4">
			<canvas bind:this={comparisonChartCanvas} width="400" height="300"></canvas>
		</div>
	</div>
</div>
