<script lang="ts">
	import { page } from '$app/stores';
	import { icons } from '$lib';
	import Icon from '@iconify/svelte';
</script>

<div class="stack gap-6 min-w-[100%] sm:min-w-[500px]">
	<div
		class="stack gap-5 max-w-[800px] text-sm sm:text-base bg-white py-6 sm:py-10 px-4 sm:px-20 rounded-md _drop-shadow"
	>
		<h1 class="text-2xl text-center capitalize">{$page.route.id?.split('/').at(-1)}</h1>
		<div class="max-h-[300px] overflow-y-auto">
			<slot />
		</div>
	</div>
	<a href="/" class="flex sm:hidden center bg-white self-center px-3 py-2 rounded-md _drop-shadow">
		<Icon icon={icons.hamburger} height="30px" />
	</a>
</div>
