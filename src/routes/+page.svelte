<script lang="ts">
	import { localLinks } from '$lib/common/localLinks';
	import Button from '$lib/components/Button.svelte';
	import DaidDark from '$lib/svgs/DaidDark.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="stack center gap-6">
	<div class="hidden sm:flex">
		<DaidDark height="30px" />
	</div>
	<div class="flex flex-col gap-3 sm:gap-4">
		{#each localLinks as link}
			<a href={link.path}>
				<Button>
					<Icon icon={link.icon} height="25px" color="rgb(220, 220, 220)" />
					{link.label}
				</Button>
			</a>
		{/each}
	</div>
</div>

<!-- <div class="stack center gap-6">
	<div class="hidden sm:flex">
		<DaidDark height="30px" />
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
</div> -->
