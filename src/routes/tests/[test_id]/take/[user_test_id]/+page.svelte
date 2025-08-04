<script lang="ts">
	import Header from './Header.svelte';
	import Questions from './Questions.svelte';
	import { onMount } from 'svelte';
	import Stats from './Stats.svelte';
	import { invalidateAll } from '$app/navigation';

	let { data }: { data: any } = $props();
	let timeRemaining = $state('');
	let isTimeExpired = $state(false);
	let timerInterval: ReturnType<typeof setInterval> | null = null;

	function updateTimer() {
		if (!data.test.duration || !data.userTest.startedAt) {
			timeRemaining = '';
			return;
		}

		const startTime = new Date(data.userTest.startedAt);
		const endTime = new Date(startTime.getTime() + data.test.duration * 60 * 1000);
		const now = new Date();
		const remainingMs = endTime.getTime() - now.getTime();

		if (remainingMs <= 0) {
			timeRemaining = 'Time expired';
			isTimeExpired = true;
			if (timerInterval) {
				clearInterval(timerInterval);
			}
			invalidateAll();
		}

		const hours = Math.floor(remainingMs / (1000 * 60 * 60));
		const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

		if (hours > 0) {
			timeRemaining = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
		} else {
			timeRemaining = `${minutes}:${seconds.toString().padStart(2, '0')}`;
		}
	}

	onMount(() => {
		updateTimer();
		timerInterval = setInterval(updateTimer, 1000);

		return () => {
			if (timerInterval) {
				clearInterval(timerInterval);
			}
		};
	});
</script>

<div class="flex flex-col items-center p-4">
	<div class=" flex w-full flex-col gap-4 lg:max-w-6xl">
		<Header test={data.test} expired={isTimeExpired} />

		{#if timeRemaining && data.test.duration}
			<div class=" rounded-lg border border-blue-200 bg-blue-50 p-4">
				<div class="flex items-center justify-center">
					<span class="mr-2 text-sm font-medium text-blue-700">Time Remaining:</span>
					<span class="text-lg font-bold text-blue-900">{timeRemaining}</span>
				</div>
			</div>
		{/if}

		{#if isTimeExpired}
					<div class=""><Stats /></div>

		{/if}

		<hr class="border-gray-200" />

		<div class="mt-4 rounded-xl border border-gray-200 p-4 shadow-md">
			<h4 class="text-xl">Questions</h4>

			<div class="mt-4">
				<Questions questions={data.test.testQuestions} />
			</div>
		</div>
	</div>
</div>
