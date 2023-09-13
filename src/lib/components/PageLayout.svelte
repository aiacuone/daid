<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class="stack gap-5 max-w-[800px] text-sm sm:text-base center min-w-[100%] sm:min-w-[500px] h-full sm:h-auto py-6 sm:py-10 px-4 sm:px-20"
>
	<!-- <div
	class="stack gap-5 max-w-[800px] text-sm sm:text-base bg-white py-6 sm:py-10 px-4 sm:px-20 rounded-2xl _drop-shadow center min-w-[100%] sm:min-w-[500px] h-full sm:h-auto"
> -->
	<h1 class="text-2xl text-center capitalize font-bold">{$page.route.id?.split('/').at(-1)}</h1>
	<slot />
</div>
