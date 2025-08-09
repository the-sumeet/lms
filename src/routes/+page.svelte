<script>
	import { enhance } from '$app/forms';
	
	let mobileMenu = $state(false);
	let formSubmitting = $state(false);
	let showSuccess = $state(false);
	let showError = $state(false);
	let errorMessage = $state('');
	let {form} = $props();
</script>


<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<div class="bg-white overflow-y-scroll h-full">
	<!-- Header -->
	<header class="absolute inset-x-0 top-0 z-50 bg-white/60 backdrop-blur">
		<nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img src="niyogiias_logo.png" alt="" class="h-8 w-auto" />
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					onclick={() => (mobileMenu = !mobileMenu)}
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						data-slot="icon"
						aria-hidden="true"
						class="size-6"
					>
						<path
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<a href="#pricing" class="text-sm/6 font-semibold text-gray-900">Pricing</a>
				<a href="#features" class="text-sm/6 font-semibold text-gray-900">Features</a>
				<a href="#contact" class="text-sm/6 font-semibold text-gray-900">Contact</a>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="/login" class="text-sm/6 font-semibold text-gray-900"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu state. -->
		{#if mobileMenu}
			<div class="lg:hidden" role="dialog" aria-modal="true">
				<!-- Background backdrop -->
				<div class="fixed inset-0 z-50"></div>

				<!-- Mobile menu panel -->
				<div
					class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				>
					<div class="flex items-center justify-between">
						<a href="#" class="-m-1.5 p-1.5">
							<span class="sr-only">Your Company</span>
							<img src="niyogiias_logo.png" alt="" class="h-8 w-auto" />
						</a>
						<button
							onclick={() => (mobileMenu = false)}
							type="button"
							class="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span class="sr-only">Close menu</span>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								data-slot="icon"
								aria-hidden="true"
								class="size-6"
							>
								<path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/10">
							<div class="space-y-2 py-6">
								<a
									href="#pricing"
									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Pricing</a
								>
								<a
									href="#features"
									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Features</a
								>
								<a
									href="#contact"
									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Contact</a
								>
							</div>
							<div class="py-6">
								<a
									href="/login"
									class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Log in</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</header>

	<main class="isolate">
		<!-- Hero section -->
		<div class="relative pt-14">
			<div
				aria-hidden="true"
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			>
				<div
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				></div>
			</div>
			<div class="py-24 sm:py-32 lg:pb-40">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl text-center">
						<h1
							class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
						>
							Crack India's Toughest Exams with Confidence
						</h1>
						<p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
							Structured courses, expert guidance, mock tests, and personalized mentorship for UPSC,
							State PCS, and other top exams.
						</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Get started</a
							>
							<a href="#" class="text-sm/6 font-semibold text-gray-900"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</div>
					</div>
					<!-- <div class="mt-16 flow-root sm:mt-24">
						<div
							class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4"
						>
							<img
								width="2432"
								height="1442"
								src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
								alt="App screenshot"
								class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
							/>
						</div>
					</div> -->
				</div>
			</div>
			<div
				aria-hidden="true"
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			>
				<div
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				></div>
			</div>
		</div>

		<!-- Logo cloud -->
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"
			>
				<img
					width="158"
					height="48"
					src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
					alt="Transistor"
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				/>
				<img
					width="158"
					height="48"
					src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
					alt="Reform"
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				/>
				<img
					width="158"
					height="48"
					src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
					alt="Tuple"
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				/>
				<img
					width="158"
					height="48"
					src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
					alt="SavvyCal"
					class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
				/>
				<img
					width="158"
					height="48"
					src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
					alt="Statamic"
					class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
				/>
			</div>
			<div class="mt-16 flex justify-center">
				<p
					class="relative rounded-full px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 ring-inset hover:ring-gray-900/20"
				>
					<span class="hidden md:inline"
						>Transistor saves up to $40,000 per year, per employee by working with us.</span
					>
					<a href="#" class="font-semibold text-indigo-600"
						><span aria-hidden="true" class="absolute inset-0"></span> Read our case study
						<span aria-hidden="true">&rarr;</span></a
					>
				</p>
			</div>
		</div>

		<!-- Feature section -->
		<div id="features" class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base/7 font-semibold text-indigo-600">Features</h2>
				<p
					class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
				>
					Why choose us?
				</p>
				<p class="mt-6 text-lg/8 text-pretty text-gray-600">
					With our learner-centric approach, we aim to build India’s next generation of bureaucrats.
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl
					class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<i class="bi bi-camera-reels text-xl text-white"></i>
							</div>
							📃 Online Video Lectures
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Comprehensive recorded & live sessions led by experienced faculty
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<i class="bi bi-journal-check text-xl text-white"></i>
							</div>
							🔢 Test Series
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							UPSC & State PCS pattern-based mocks for Prelims & Mains
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<i class="bi bi-pencil text-xl text-white"></i>
							</div>
							🖊️ Mains Answer Writing
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Daily & weekly writing practice with feedback
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<i class="bi bi-graph-up text-xl text-white"></i>
							</div>
							✏️ PYQs & Analysis
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Subject-wise & topic-wise Previous Year Questions
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<i class="bi bi-clipboard2-check text-xl text-white"></i>
							</div>
							🤝 Mock Interview Preparation
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							DAF analysis, panel sessions & personality development
						</dd>
					</div>
				</dl>
			</div>
		</div>

		<!-- Testimonial section -->
		<div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
			<div
				class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20"
			>
				<img
					src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
					alt=""
					class="absolute inset-0 size-full object-cover brightness-150 saturate-0"
				/>
				<div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
				<div aria-hidden="true" class="absolute -top-56 -left-80 transform-gpu blur-3xl">
					<div
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
						class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
					></div>
				</div>
				<div
					aria-hidden="true"
					class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
				>
					<div
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
						class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
					></div>
				</div>
				<div class="relative mx-auto max-w-2xl lg:mx-0">
					<figure>
						<blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl/8">
							<p>
								"The comprehensive study materials and expert guidance helped me achieve AIR 15. The
								mock tests were particularly helpful in time management"
							</p>
						</blockquote>
						<figcaption class="mt-6 text-base text-white">
							<div class="font-semibold">Priya Sharma</div>
							<div class="mt-1">AIR 15, UPSC 2024</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>

		<!-- Pricing section -->
		<div id="pricing" class="py-24 sm:pt-48">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
					<h2 class="text-base/7 font-semibold text-indigo-600">Pricing</h2>
					<p
						class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
					>
						Pricing that grows with you
					</p>
					<p class="mt-6 text-lg/8 text-pretty text-gray-600">
						Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget
						egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
					</p>
				</div>
				<div
					class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
				>
					<div
						class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-r-none xl:p-10"
					>
						<div>
							<div class="flex items-center justify-between gap-x-4">
								<h3 id="tier-freelancer" class="text-lg/8 font-semibold text-gray-900">
									Freelancer
								</h3>
							</div>
							<p class="mt-4 text-sm/6 text-gray-600">
								The essentials to provide your best work for clients.
							</p>
							<p class="mt-6 flex items-baseline gap-x-1">
								<span class="text-4xl font-semibold tracking-tight text-gray-900">$19</span>
								<span class="text-sm/6 font-semibold text-gray-600">/month</span>
							</p>
							<ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									5 products
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Up to 1,000 subscribers
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Basic analytics
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									48-hour support response time
								</li>
							</ul>
						</div>
						<a
							href="#"
							aria-describedby="tier-freelancer"
							class="mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Buy plan</a
						>
					</div>
					<div
						class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:z-10 lg:rounded-b-none xl:p-10"
					>
						<div>
							<div class="flex items-center justify-between gap-x-4">
								<h3 id="tier-startup" class="text-lg/8 font-semibold text-indigo-600">Startup</h3>
								<p
									class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600"
								>
									Most popular
								</p>
							</div>
							<p class="mt-4 text-sm/6 text-gray-600">
								A plan that scales with your rapidly growing business.
							</p>
							<p class="mt-6 flex items-baseline gap-x-1">
								<span class="text-4xl font-semibold tracking-tight text-gray-900">$49</span>
								<span class="text-sm/6 font-semibold text-gray-600">/month</span>
							</p>
							<ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									25 products
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Up to 10,000 subscribers
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Advanced analytics
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									24-hour support response time
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Marketing automations
								</li>
							</ul>
						</div>
						<a
							href="#"
							aria-describedby="tier-startup"
							class="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Buy plan</a
						>
					</div>
					<div
						class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-l-none xl:p-10"
					>
						<div>
							<div class="flex items-center justify-between gap-x-4">
								<h3 id="tier-enterprise" class="text-lg/8 font-semibold text-gray-900">
									Enterprise
								</h3>
							</div>
							<p class="mt-4 text-sm/6 text-gray-600">
								Dedicated support and infrastructure for your company.
							</p>
							<p class="mt-6 flex items-baseline gap-x-1">
								<span class="text-4xl font-semibold tracking-tight text-gray-900">$99</span>
								<span class="text-sm/6 font-semibold text-gray-600">/month</span>
							</p>
							<ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Unlimited products
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Unlimited subscribers
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Advanced analytics
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									1-hour, dedicated support response time
								</li>
								<li class="flex gap-x-3">
									<svg
										viewBox="0 0 20 20"
										fill="currentColor"
										data-slot="icon"
										aria-hidden="true"
										class="h-6 w-5 flex-none text-indigo-600"
									>
										<path
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
									Marketing automations
								</li>
							</ul>
						</div>
						<a
							href="#"
							aria-describedby="tier-enterprise"
							class="mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Buy plan</a
						>
					</div>
				</div>
			</div>
		</div>

		<!-- Contact -->
		<div id="contact" class="relative isolate bg-white">
			<div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							Get in touch
						</h2>
						<p class="mt-6 text-lg/8 text-gray-600">
							If you have any questions or need further information, feel free to reach out to us,
							or drop a message.
						</p>
						<dl class="mt-10 space-y-4 text-base/7 text-gray-600">
							<div class="flex gap-x-4">
								<dt class="flex-none">
									<span class="sr-only">Address</span>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										data-slot="icon"
										aria-hidden="true"
										class="h-7 w-6 text-gray-400"
									>
										<path
											d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</dt>
								<dd>
									Niyogi EdTech, Bunglow no. 3, Lane 33B, <br />DSK Chowk, Dhayari, Pune - 411041
								</dd>
							</div>
							<div class="flex gap-x-4">
								<dt class="flex-none">
									<span class="sr-only">Telephone</span>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										data-slot="icon"
										aria-hidden="true"
										class="h-7 w-6 text-gray-400"
									>
										<path
											d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</dt>
								<dd>
									<a href="tel:+919527744277" class="hover:text-gray-900">+919527744277</a>
								</dd>
							</div>
							<div class="flex gap-x-4">
								<dt class="flex-none">
									<span class="sr-only">Email</span>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										data-slot="icon"
										aria-hidden="true"
										class="h-7 w-6 text-gray-400"
									>
										<path
											d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</dt>
								<dd>
									<a href="mailto:contact@niyogiias.com" class="hover:text-gray-900"
										>contact@niyogiias.com</a
									>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<form 
					id="contact-form"
					action="?/contact" 
					method="POST" 
					class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
					use:enhance={() => {
						formSubmitting = true;
						showSuccess = false;
						showError = false;
						return async ({ result, update }) => {
							formSubmitting = false;
							if (result.type === 'success') {
								showSuccess = true;
								document.getElementById('contact-form')?.reset();
							} else if (result.type === 'failure') {
								showError = true;
								errorMessage = result.data?.error || 'An error occurred';
							}
							await update();
						};
					}}
				>
					<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
						<!-- Success message -->
						{#if showSuccess}
							<div class="mb-6 rounded-md bg-green-50 p-4">
								<div class="flex">
									<div class="flex-shrink-0">
										<svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
										</svg>
									</div>
									<div class="ml-3">
										<p class="text-sm font-medium text-green-800">
											{form?.message || 'Thank you for your message! We will get back to you soon.'}
										</p>
									</div>
									<div class="ml-auto pl-3">
										<div class="-mx-1.5 -my-1.5">
											<button type="button" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50" onclick={() => showSuccess = false}>
												<span class="sr-only">Dismiss</span>
												<svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						{/if}
						
						<!-- Error message -->
						{#if showError || form?.error}
							<div class="mb-6 rounded-md bg-red-50 p-4">
								<div class="flex">
									<div class="flex-shrink-0">
										<svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
										</svg>
									</div>
									<div class="ml-3">
										<p class="text-sm font-medium text-red-800">
											{form?.error || errorMessage}
										</p>
									</div>
									<div class="ml-auto pl-3">
										<div class="-mx-1.5 -my-1.5">
											<button type="button" class="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50" onclick={() => showError = false}>
												<span class="sr-only">Dismiss</span>
												<svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						{/if}
						<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
									>First name</label
								>
								<div class="mt-2.5">
									<input
										id="first-name"
										type="text"
										name="first-name"
										autocomplete="given-name"
										class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div>
								<label for="last-name" class="block text-sm/6 font-semibold text-gray-900"
									>Last name</label
								>
								<div class="mt-2.5">
									<input
										id="last-name"
										type="text"
										name="last-name"
										autocomplete="family-name"
										class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div class="sm:col-span-2">
								<label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
								<div class="mt-2.5">
									<input
										id="email"
										type="email"
										name="email"
										autocomplete="email"
										class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div class="sm:col-span-2">
								<label for="phone-number" class="block text-sm/6 font-semibold text-gray-900"
									>Phone number</label
								>
								<div class="mt-2.5">
									<input
										id="phone-number"
										type="tel"
										name="phone-number"
										autocomplete="tel"
										class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div class="sm:col-span-2">
								<label for="message" class="block text-sm/6 font-semibold text-gray-900"
									>Message</label
								>
								<div class="mt-2.5">
									<textarea
										id="message"
										name="message"
										rows="4"
										class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									></textarea>
								</div>
							</div>
						</div>
						<div class="mt-8 flex justify-end">
							<button
								type="submit"
								disabled={formSubmitting}
								class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
							>
								{#if formSubmitting}
									<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"></circle>
										<path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Sending...
								{:else}
									Send message
								{/if}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>

		<!-- FAQs -->
		<div class="mx-auto max-w-2xl px-6 pb-8 sm:pt-12 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pb-32">
			<h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
				Frequently asked questions
			</h2>
			<dl class="mt-20 divide-y divide-gray-900/10">
				<div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
					<dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">
						What&#039;s the best thing about Switzerland?
					</dt>
					<dd class="mt-4 lg:col-span-7 lg:mt-0">
						<p class="text-base/7 text-gray-600">
							I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Quas cupiditate laboriosam fugiat.
						</p>
					</dd>
				</div>
				<div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
					<dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">
						How do you make holy water?
					</dt>
					<dd class="mt-4 lg:col-span-7 lg:mt-0">
						<p class="text-base/7 text-gray-600">
							You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia
							facere id sequi expedita natus.
						</p>
					</dd>
				</div>
				<div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
					<dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">
						What do you call someone with no body and no nose?
					</dt>
					<dd class="mt-4 lg:col-span-7 lg:mt-0">
						<p class="text-base/7 text-gray-600">
							Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas
							ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore
							voluptatem.
						</p>
					</dd>
				</div>
				<div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
					<dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">
						Why do you never see elephants hiding in trees?
					</dt>
					<dd class="mt-4 lg:col-span-7 lg:mt-0">
						<p class="text-base/7 text-gray-600">
							Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quas cupiditate laboriosam fugiat.
						</p>
					</dd>
				</div>
				<div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
					<dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">
						Why can&#039;t you hear a pterodactyl go to the bathroom?
					</dt>
					<dd class="mt-4 lg:col-span-7 lg:mt-0">
						<p class="text-base/7 text-gray-600">
							Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam
							suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.
						</p>
					</dd>
				</div>
				<div class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
					<dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">
						Why did the invisible man turn down the job offer?
					</dt>
					<dd class="mt-4 lg:col-span-7 lg:mt-0">
						<p class="text-base/7 text-gray-600">
							He couldn&#039;t see himself doing it. Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut
							voluptatibus, perferendis sed unde rerum deserunt eius.
						</p>
					</dd>
				</div>
			</dl>
		</div>

		<!-- CTA section -->
		<div class="relative -z-10 mt-32 px-6 lg:px-8">
			<div
				aria-hidden="true"
				class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:top-auto sm:right-[calc(50%-6rem)] sm:bottom-0 sm:translate-y-0 sm:transform-gpu sm:justify-end"
			>
				<div
					style="clip-path: polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)"
					class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
				></div>
			</div>
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
					Boost your productivity. Start using our app today.
				</h2>
				<p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
					Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
					proident excepteur commodo do ea.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Get started</a
					>
					<a href="#" class="text-sm/6 font-semibold text-gray-900"
						>Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<div
				aria-hidden="true"
				class="absolute top-full right-0 left-1/2 -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
			>
				<div
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
				></div>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<footer class="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">
		<div class="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
			<div class="xl:grid xl:grid-cols-3 xl:gap-8">
				<img src="niyogiias_logo.png" alt="Company name" class="h-9" />
				<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-sm/6 font-semibold text-gray-900">Solutions</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Hosting</a>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Data services</a>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900"
										>Uptime monitoring</a
									>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900"
										>Enterprise services</a
									>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Analytics</a>
								</li>
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3 class="text-sm/6 font-semibold text-gray-900">Support</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Submit ticket</a>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Documentation</a>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Guides</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-sm/6 font-semibold text-gray-900">Company</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">About</a>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Blog</a>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Jobs</a>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Press</a>
								</li>
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3 class="text-sm/6 font-semibold text-gray-900">Legal</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900"
										>Terms of service</a
									>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Privacy policy</a>
								</li>
								<li>
									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">License</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
