<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class="stack gap-5 max-w-[800px] text-sm sm:text-base bg-white py-6 sm:py-10 px-4 sm:px-20 rounded-md _drop-shadow center min-w-[100%] sm:min-w-[500px]"
>
	<h1 class="text-2xl text-center capitalize">{$page.route.id?.split('/').at(-1)}</h1>
	<div
		class="max-h-[300px] sm:max-h-[auto] overflow-hidden overflow-y-scroll sm:overflow-y-auto min-h-[250px]"
	>
		<slot />
	</div>
</div>
