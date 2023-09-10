<script lang="ts">
	import DaidDark from '$lib/svgs/DaidDark.svelte';
	import '../global.css';
	import { localLinks } from '../links';
</script>

<div class="stack center gap-3">
	<div class="hidden sm:flex">
		<DaidDark height="50px" />
	</div>
	<div class="flex flex-col gap-3">
		{#each localLinks as link, i}
			{@const rounded =
				i === 0 ? 'rounded-t-3xl' : i === localLinks.length - 1 ? 'rounded-b-3xl' : ''}
			<a
				href={link.path}
				class="bg-gray-300 h-[40px] sm:h-[45px] w-[150px] sm:w-[200px] center {rounded} text-md sm:text-xl"
				>{link.label}</a
			>
		{/each}
	</div>
</div>
