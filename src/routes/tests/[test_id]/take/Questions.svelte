<script>
	let { questions } = $props();
</script>

<div class="flex flex-col gap-4">
	{#each questions as question (question.id)}
		<div class="w-full rounded-xl border-4 border-gray-300">
			<div class="rounded-lg bg-white p-6 shadow">
				<h3 class="mb-2 text-lg font-semibold">{question.question.content}</h3>
				<ul class="list-disc pl-5">
					{#each question.options as option (option.id)}
						<li>{option.text}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>
