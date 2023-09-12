<script lang="ts">
	const services = [
		'Business Transformation',
		'Business Consulting and Strategy',
		'Digital Services and Artificial Intelligence (AI)',
		'Real Estate and Maintenance',
		'Change Management, Communications and Training',
		'Project Management',
		'Data Analytics and Insights',
		'Mergers and Aquisitions'
	];
</script>

<div class="stack gap-4">
	<ul>
		{#each services as service}
			<li>{service}</li>
		{/each}
	</ul>
	<p>We cater to <i>all sectors and sizes</i></p>
</div>

<style>
	li {
		list-style: disc;
		margin-left: 12px;
	}
</style>
