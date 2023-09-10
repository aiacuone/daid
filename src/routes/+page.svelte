<script lang="ts">
	import DaidDark from '$lib/svgs/DaidDark.svelte';
	import '../global.css';
	import { localLinks } from '../links';
</script>

<div class="stack center gap-3">
	<DaidDark height="50px" />
	<div class="flex flex-col gap-2">
		{#each localLinks as link, i}
			{@const rounded =
				i === 0 ? 'rounded-t-2xl' : i === localLinks.length - 1 ? 'rounded-b-2xl' : ''}
			<a href={link.path} class="bg-gray-300 py-[4px] w-[150px] center {rounded}">{link.label}</a>
		{/each}
	</div>
</div>
