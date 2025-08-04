<script>

    let { questions } = $props();
</script>

<div class="flex flex-col gap-4">

    {#each questions as question (question.id)}
        <div class="w-full border-4 border-gray-300 rounded-xl">
            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-lg font-semibold mb-2">{question.question.content}</h3>
                <ul class="list-disc pl-5">
                    {#each question.options as option (option.id)}
                        <li>{option.text}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}
</div>