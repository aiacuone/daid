<script lang="ts">
	import { localLinks } from '$lib/common/links';
	import DaidDark from '$lib/svgs/DaidDark.svelte';
</script>

<div class="stack center gap-6">
	<div class="hidden sm:flex">
		<DaidDark height="50px" />
	</div>
	<div class="flex flex-col gap-3 sm:gap-4">
		{#each localLinks as link, i}
			{@const rounded =
				i === 0 ? 'rounded-t-3xl' : i === localLinks.length - 1 ? 'rounded-b-3xl' : ''}
			<a
				href={link.path}
				class="bg-white h-[45px] w-[170px] sm:w-[200px] center {rounded} text-md sm:text-xl _drop-shadow"
				>{link.label}</a
			>
		{/each}
	</div>
</div>
