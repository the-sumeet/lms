<script>
	let { questions } = $props();

    let lst = [1, 2, 3, 4]
</script>

<div class="flex flex-col gap-4">
	{#each questions as question (question.id)}
		<div class="w-full rounded-xl border-4 border-gray-200">
			<div class="rounded-lg bg-white p-6 shadow">

                <div class="flex flex-wrap gap-2">
                    <span class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Q1</span>
                    <span class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">10 marks</span>
                    <span class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Maths</span>
                    <span class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Literature</span>
                    <span class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Science</span>
                </div>

                <!-- Question content -->
				<h3 class="border border-gray-200 p-4 mt-6 text-lg font-semibold">{question.question.content}</h3>
				
                <!-- Options -->
                <fieldset aria-label="Privacy setting" class="-space-y-px rounded-md bg-white mt-4">
					{#each lst as option}
                    <label
						class="group flex border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-none has-[:checked]:relative has-[:checked]:border-indigo-200 has-[:checked]:bg-indigo-50"
					>
						<input
							type="checkbox"
							name="privacy-setting"
							value="public"
							
							class="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
						/>
						<span class="ml-3 flex flex-col">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem nulla saepe, modi deleniti doloribus in itaque neque maiores qui, ipsa odit, unde eius! Cupiditate nemo perferendis consectetur laborum blanditiis!
						</span>
					</label>
                    {/each}
				</fieldset>

                <!-- Bottom buttoms -->
                 <div class="flex mt-4">
                    <button type="button" class="rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Submit</button>
                 </div>
			</div>
		</div>
	{/each}
</div>
