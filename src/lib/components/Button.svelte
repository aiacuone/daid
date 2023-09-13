<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string | undefined = undefined;
	export let iconOpacity: string | number = 90;
	export let iconHeight = '25px';
	export let iconColor = 'black';
</script>

<button
	class="hstack items-center gap-2 _drop-shadow center px-10 py-2 rounded-md bg-white w-full min-w-[170px]"
>
	{#if icon}
		<div class="opacity-{iconOpacity}">
			<Icon {icon} height={iconHeight} color={iconColor} />
		</div>
	{/if}
	<slot />
</button>
