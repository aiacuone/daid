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
	<div class="w-full hstack px-10 center sm:justify-start footer py-3">
		<div class="stack gap-3">
			<a href="/" class="flex sm:hidden center self-center">
				<Icon icon={icons.hamburger} height="30px" color="white" />
			</a>
			<div class="hstack gap-6">
				{#each socialLinks as social}
					<a href={social.url} target="_blank" class="center h-[25px]">
						<Icon icon={social.icon} height="100%" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.header,
	.footer {
		background-color: #372b48;
		min-height: 80px;
	}

	.header {
		font-family: Allerta Stencil, sans-serif;
		filter: drop-shadow(0px 10px 5px rgb(190, 190, 190));
	}

	.footer {
		filter: drop-shadow(0px -10px 5px rgb(190, 190, 190));
	}
</style>
