<script lang="ts">
	import { icons } from '$lib';
	import Icon from '@iconify/svelte';
	import { localLinks } from '../links';
	import DaidLight from '$lib/svgs/DaidLight.svelte';
	import '../global.css';
	import { onMount } from 'svelte';

	let rootContainerHeight;
	onMount(() => {
		const onResize = () => {
			rootContainerHeight = window.innerHeight + 'px';
		};

		window.addEventListener('resize', onResize);
		onResize();
		return () => {
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<div class="h-screen w-screen stack bg-gray-100" bind:clientHeight={rootContainerHeight}>
	<!-- HEADER -->
	<div class="w-full hstack py-2 px-10 header">
		<div class=" flex-1 sm:flex-none center">
			<a href="/" class="rounded-md center"><DaidLight height="40px" /></a>
		</div>
		<div class="flex-1 hidden sm:flex" />
		<div class="gap-6 hidden sm:flex">
			{#each localLinks as link}
				<a href={link.path} class="text-lg text-white center uppercase">{link.label}</a>
			{/each}
		</div>
	</div>
	<div class="flex-1 center p-4">
		<slot />
	</div>
	<!-- FOOTER -->
	<div class="w-full hstack py-2 px-10 justify-center sm:justify-start footer">
		<div class="hstack gap-5">
			<a href="https://www.linkedin.com/in/dahyad/?originalSubdomain=uk" target="_blank">
				<Icon icon={icons.linkedin} height="30px" />
			</a>
			<a href="https://www.instagram.com/dipi_d/?hl=en" target="_blank">
				<Icon icon={icons.instagram} height="30px" />
			</a>
			<a href="https://www.tiktok.com/@dipzlikechipz_" target="_blank">
				<Icon icon={icons.tiktok} height="30px" />
			</a>
		</div>
	</div>
</div>

<style>
	.header,
	.footer {
		background-color: #372b48;
	}

	.header {
		font-family: Allerta Stencil, sans-serif;
	}
</style>
