<script lang="ts">
	import Job from '$lib/components/Job.svelte';

	const jobs = [
		{
			title: 'Assistant Manager',
			link: 'https://drive.google.com/file/d/1Xa_azL-iUYUaUqYYSl3Hsfmx7ztqw29z/view?usp=sharing'
		}
	];
</script>

<div class="stack">
	{#each jobs as job}
		<Job {...job} />
	{/each}
</div>
