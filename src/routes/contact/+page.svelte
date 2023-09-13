<script lang="ts">
	import { socialLinks } from '$lib/common/socialLinks';
	import Icon from '@iconify/svelte';
</script>

<div class="stack gap-6">
	{#each socialLinks as social}
		<a
			href={social.url}
			target="_blank"
			class="hstack items-center gap-2 _drop-shadow center px-10 py-2 rounded-md bg-white"
		>
			<div class="center h-[30px]">
				<Icon icon={social.icon} height="100%" />
			</div>
			<p>
				{social.label}
			</p>
		</a>
	{/each}
</div>
