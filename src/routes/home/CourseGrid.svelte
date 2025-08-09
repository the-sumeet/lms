<script>
	// Sample role data similar to the image
	const roles = [
		{
			id: 1,
			title: 'Course 1',
			description:
				'A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.',
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face',
			salary: '₹3,07,679',
			jobs: '23,904',
			skills: [
				'analyzing data to find insights',
				'creating reports and visualizations',
				'working with spreadsheets and databases'
			],
			credentials: [
				{ name: 'Meta Data Analyst', icon: '📊' },
				{ name: 'IBM Data Analyst', icon: '🔵' }
			]
		},
		{
			id: 2,
			title: 'Course 2',
			description:
				'A Data Scientist analyzes large datasets to uncover insights, using statistics, machine learning, and visualization to inform business strategies.',
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
			salary: '₹5,28,711',
			jobs: '21,602',
			skills: [
				'analyzing complex datasets',
				'developing machine learning models',
				'solving statistical problems'
			],
			credentials: [{ name: 'IBM Data Science', icon: '🔵' }]
		},
		{
			id: 3,
			title: 'Course 3',
			description:
				'A Machine Learning Engineer builds and optimizes algorithms that enable computers to learn from data, using large datasets and neural networks.',
			image:
				'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop&crop=face',
			salary: '₹8,50,000',
			jobs: '15,432',
			skills: [
				'developing machine learning models',
				'working with large datasets',
				'coding in python or r'
			],
			credentials: [
				{ name: 'Machine Learning', icon: '🤖' },
				{ name: 'MathWorks Computer Vision Engineer', icon: '👁️' }
			]
		}
	];

	// Filter tabs
	let activeFilter = 'Popular';
	const filterTabs = [
		'Beginner',
		'Popular',
		'Software Engineering & IT',
		'Business',
		'Sales & Marketing',
		'Data Science & Analytics',
		'Healthcare'
	];
</script>

<div class="w-full">
	<!-- Filter Tabs -->
	<div class="mb-6 flex flex-wrap gap-2">
		{#each filterTabs as tab}
			<button
				class="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 {activeFilter ===
				tab
					? 'bg-gradient text-white'
					: 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
				on:click={() => (activeFilter = tab)}
			>
				{tab}
			</button>
		{/each}
	</div>

	<!-- Left sidebar with "Choose your role" -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
		<!-- Left Panel -->
		<div class="lg:col-span-1">
			<div class="top-8">
				<h2 class="mb-4 text-3xl font-bold text-gray-900">Choose your course</h2>
				<p class="mb-6 text-gray-600">Gain the knowledge and skills you need to advance.</p>
				<button class="btn-primary bg-gradient-clickable"> Explore all roles </button>
			</div>
		</div>

		<!-- Role Cards Grid -->
		<div class="lg:col-span-3">
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				{#each roles as role}
					<div
						class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
					>
						<!-- Hero Section with Image and Orange Accent -->
						<div
							class="relative h-40 overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500"
						>
							<div
								class="absolute inset-0 bg-gradient-to-r from-transparent to-orange-600/20"
							></div>
							<img
								src={role.image}
								alt={role.title}
								class="absolute right-4 top-1/2 h-20 w-20 -translate-y-1/2 transform rounded-full border-4 border-white/20 object-cover"
							/>
							<!-- Chart/Stats Icon -->
							<div
								class="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20"
							>
								<svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
									/>
								</svg>
							</div>
						</div>

						<!-- Content -->
						<div class="p-6">
							<h3 class="mb-3 text-xl font-bold text-gray-900">{role.title}</h3>
							<p class="mb-4 text-sm leading-relaxed text-gray-600">{role.description}</p>


							<!-- Salary and Jobs -->
							<div class="mb-4 flex items-center justify-between text-sm">
								<div>
									<div class="font-bold text-gray-900">{role.salary}</div>
									<div class="text-gray-500">median salary</div>
								</div>
								<div>
									<div class="font-bold text-gray-900">{role.jobs}</div>
									<div class="text-gray-500">seats available</div>
								</div>
							</div>

							<!-- Credentials -->
							<div>
								<h4 class="mb-2 text-sm font-semibold text-gray-900">Credentials</h4>
								<div class="space-y-2">
									{#each role.credentials as credential}
										<div class="flex items-center gap-2 text-sm">
											<span class="text-lg">{credential.icon}</span>
											<span class="cursor-pointer text-blue-600 hover:underline"
												>{credential.name}</span
											>
										</div>
									{/each}
									{#if role.credentials.length > 2}
										<div class="cursor-pointer text-sm text-blue-600 hover:underline">+ 1 more</div>
									{:else if role.credentials.length === 2}
										<div class="cursor-pointer text-sm text-blue-600 hover:underline">+ 5 more</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
