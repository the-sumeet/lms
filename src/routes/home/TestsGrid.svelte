<script>

    let { tests } = $props();
    let lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>
<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

{#each tests as test }
  <a href="/tests/{test.id}" class="hover:shadow-xl transition-shadow duration-200 overflow-hidden rounded-xl border border-gray-200">
    <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
      <img src="https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg" alt="Tuple" class="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
      <div class="text-sm/6 font-medium text-gray-900">{test.title}</div>
    
    </div>
    <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
      <div class="flex justify-between gap-x-4 py-3">
        <dt class="text-gray-500">Last invoice</dt>
        <dd class="text-gray-700"><time datetime="2022-12-13">December 13, 2022</time></dd>
      </div>
      <div class="flex justify-between gap-x-4 py-3">
        <dt class="text-gray-500">Amount</dt>
        <dd class="flex items-start gap-x-2">
          <div class="font-medium text-gray-900">$2,000.00</div>
          <div class="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Overdue</div>
        </dd>
      </div>
    </dl>
</a>
{/each}
</ul>
