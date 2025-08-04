<script lang="ts">
	import { enhance } from '$app/forms';

	let { questions } = $props();

	// Track answers for each question
	let answers: Record<string, string[]> = $state({});

	// Handle option selection
	function handleOptionChange(questionId: string, optionLabel: string, isChecked: boolean) {
		if (!answers[questionId]) {
			answers[questionId] = [];
		}

		if (isChecked) {
			if (!answers[questionId].includes(optionLabel)) {
				answers[questionId] = [...answers[questionId], optionLabel];
			}
		} else {
			answers[optionLabel] = answers[questionId].filter((label: string) => label !== optionLabel);
		}
	}

	// Handle submit for individual question
	function handleSubmit() {
		return async ({ result, update }: any) => {
			if (result.type === 'success') {
			} else {
				alert('Error submitting answer. Please try again.');
			}
			await update();
		};
	}
</script>

<div class="flex flex-col gap-4">
	{#each questions as question, questionIndex (question.id)}
		<div class="w-full rounded-xl border-4 border-gray-200">
			<div class="rounded-lg bg-white p-6 shadow">
				<div class="flex flex-wrap gap-2">
					<span
						class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10 ring-inset"
						>Q{questionIndex + 1}</span
					>
					<span
						class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10 ring-inset"
						>{question.question.points} marks</span
					>
				</div>

				<!-- Question content -->
				<h3 class="mt-6 border border-gray-200 p-4 text-lg font-semibold">
					{question.question.content}
				</h3>

				<!-- Options -->
				<fieldset
					aria-label="Question {questionIndex + 1}"
					class="mt-4 -space-y-px rounded-md bg-white"
				>
					{#each question.question.options as option, optionIndex}
						<label
							class="group flex border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-none has-[:checked]:relative has-[:checked]:border-indigo-200 has-[:checked]:bg-indigo-50"
						>
							<input
								type="checkbox"
								name="question_{question.question.id}"
								value={option.label}
								onchange={(e) => {
									const target = e.target;
									if (target && 'checked' in target) {
										handleOptionChange(question.question.id, option.label, Boolean(target.checked));
									}
								}}
								class="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
							/>
							<span class="ml-3 flex flex-col">{option.content}</span>
						</label>
					{/each}
				</fieldset>

				<!-- Individual submit form for this question -->
				<form method="POST" action="?/submitAnswer" use:enhance={handleSubmit}>
					<!-- Hidden input for question ID -->
					<input type="hidden" name="questionId" value={question.question.id} />

					<!-- Hidden inputs for selected answers -->
					{#if answers[question.question.id]}
						{#each answers[question.question.id] as optionIndex}
							<input type="hidden" name="selectedOptions" value={optionIndex} />
						{/each}
					{/if}

					<!-- Submit button for this question -->
					<div class="mt-4 flex">
						<button
							type="submit"
							class="rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
							>Submit</button
						>
					</div>
				</form>
			</div>
		</div>
	{/each}
</div>
