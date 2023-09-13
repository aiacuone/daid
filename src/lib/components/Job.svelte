<script lang="ts">
	import Button from './Button.svelte';

	export let title: string;
	export let link: string;
</script>

<div class="flex flex-col sm:flex-row center gap-3 px-10 rounded-lg">
	<p class="text-lg font-semibold text-center">{title}</p>
	<a href={link} target="_blank">
		<Button>Apply</Button>
	</a>
</div>
