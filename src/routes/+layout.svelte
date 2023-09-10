<script lang="ts">
	import { icons } from '$lib';
	import Icon from '@iconify/svelte';
</script>

<div class="h-screen w-screen stack bg-gray-100">
	<!-- HEADER -->
	<div class="w-full bg-gray-500 hstack p-2">
		<div class=" flex-1 sm:flex-none center">
			<a href="/" class="h-10 w-20 bg-gray-100 rounded-md center">Logo</a>
		</div>
		<div class="flex-1 hidden sm:flex" />
		<div class="gap-2 hidden sm:flex">
			<a href="/about" class="center bg-gray-100 py-2 px-8 rounded-md">About</a>
			<a href="/services" class="center bg-gray-100 py-2 px-8 rounded-md">Services</a>
			<a href="/contact" class="center bg-gray-100 py-2 px-8 rounded-md">Contact</a>
		</div>
	</div>
	<div class="flex-1 center p-4">
		<slot />
	</div>
	<!-- FOOTER -->
	<div class="w-full bg-gray-500 hstack p-2 justify-center sm:justify-start">
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
