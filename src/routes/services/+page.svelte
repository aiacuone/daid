<script lang="ts">
	const services = [
		'Business Transformation',
		'Business Consulting and Strategy',
		'Digital Services',
		'Real Estate and Maintenance',
		'Change Management, Communications and Training',
		'Project Management',
		'Data Analytics and Insights'
	];
</script>

<ul>
	{#each services as service}
		<li>{service}</li>
	{/each}
</ul>
<p>We cater to all sectors and sizes</p>

<style>
	li {
		list-style: disc;
		margin-left: 12px;
	}
</style>
