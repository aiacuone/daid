<script lang="ts">
	const services = [
		'Business Transformation',
		'Business Consulting and strategy',
		'digital Services',
		'Real Estate and Maintenance',
		'Finance and Operational Services (all sectors and sizes)'
	];
</script>

<ul>
	{#each services as service}
		<li>{service}</li>
	{/each}
</ul>

<style>
	li {
		list-style: disc;
		margin-left: 12px;
	}
</style>
