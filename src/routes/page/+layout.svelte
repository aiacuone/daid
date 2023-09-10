<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="stack gap-3 max-w-[1000px] text-sm sm:text-base">
	<h1 class="text-4xl text-center capitalize">{$page.route.id?.split('/').at(-1)}</h1>
	<slot />
</div>
