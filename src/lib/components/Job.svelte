<script lang="ts">
	export let title: string;
	export let link: string;
</script>

<div class="flex flex-col sm:flex-row center gap-3 border border-gray-300 py-4 px-10 rounded-lg">
	<p class="text-lg sm:text-2xl font-semibold text-center">{title}</p>
	<a
		href={link}
		target="_blank"
		class="button bg-gray-200 py-[6px] px-6 rounded-lg outline outline-gray-300">Apply</a
	>
</div>
