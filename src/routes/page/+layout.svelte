<script lang="ts">
	import { page } from '$app/stores';
	import { icons } from '$lib';
	import Icon from '@iconify/svelte';
</script>

<div class="stack gap-6 max-w-[800px] text-sm sm:text-base">
	<h1 class="text-3xl sm:text-4xl text-center capitalize">{$page.route.id?.split('/').at(-1)}</h1>
	<slot />
	<a href="/" class="flex sm:hidden center">
		<Icon icon={icons.hamburger} height="30px" />
	</a>
</div>
