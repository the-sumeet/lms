<script lang="ts">
	import Header from './Header.svelte';
	import Questions from './Questions.svelte';
	import { onMount } from 'svelte';

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
            return;
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
	<div class="mt-4 flex w-full flex-col lg:max-w-6xl">
		<Header test={data.test} expired={isTimeExpired} />
		
		{#if timeRemaining && data.test.duration}
			<div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
				<div class="flex items-center justify-center">
					<span class="text-sm font-medium text-blue-700 mr-2">Time Remaining:</span>
					<span class="text-lg font-bold text-blue-900">{timeRemaining}</span>
				</div>
			</div>
		{/if}
	</div>

    <div class="w-full lg:max-w-6xl mt-4">
        <Questions questions={data.test.testQuestions} />
    </div>
</div>