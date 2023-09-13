<script lang="ts">
	import Icon from '@iconify/svelte';

	import DaidLight from '$lib/svgs/DaidLight.svelte';
	import '../global.css';
	import { socialLinks } from '$lib/common/socialLinks';
	import { localLinks } from '$lib/common/links';
	import { icons } from '$lib';
</script>

<div class="h-screen w-screen bg-gray-100 stack" style={'max-height:dvh'}>
	<!-- HEADER -->
	<div class="w-full hstack px-10 header">
		<div class=" flex-1 sm:flex-none center">
			<a href="/" class="rounded-md center h-[30px] sm:h-[40px]"><DaidLight height="100%" /></a>
		</div>
		<div class="flex-1 hidden sm:flex" />
		<div class="gap-6 hidden sm:flex">
			{#each localLinks as link}
				<a href={link.path} class="text-lg text-white center uppercase">{link.label}</a>
			{/each}
		</div>
	</div>
	<div class="flex-1 center p-0 sm:p-4">
		<slot />
	</div>
	<!-- FOOTER -->
	<div class="w-full flex-col sm:flex-row px-10 center sm:justify-start footer py-3 gap-4">
		<a
			href="/"
			class="flex sm:hidden center self-center bg-white bg-opacity-10 py-1 px-2 rounded-md"
		>
			<Icon icon={icons.hamburger} height="40px" color="white" />
		</a>

		<div class="hstack gap-5 sm:gap-8 flex-1">
			{#each socialLinks as social}
				<a href={social.url} target="_blank" class="center h-[30px]">
					<Icon icon={social.icon} height="100%" color="white" />
				</a>
			{/each}
		</div>
		<div class="flex-1">
			<p class="text-white text-right text-xs sm:text-sm">
				:Daid Limited © {`${new Date().getFullYear()}`}
			</p>
		</div>
	</div>
</div>

<style>
	.header,
	.footer {
		background-color: #372b48;
		min-height: 80px;
		z-index: 2;
	}

	.header {
		font-family: Allerta Stencil, sans-serif;
		filter: drop-shadow(0px 7px 5px rgb(201, 201, 201));
	}

	.footer {
		filter: drop-shadow(0px -7px 5px rgb(202, 202, 202));
	}
</style>
