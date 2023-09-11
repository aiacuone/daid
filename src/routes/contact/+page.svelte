<script lang="ts">
	import { socialLinks } from '$lib/common/socialLinks';
	import Icon from '@iconify/svelte';
</script>

<div class="hstack gap-6">
	{#each socialLinks as social}
		<a href={social.url} target="_blank" class="center h-[35px]">
			<Icon icon={social.icon} height="100%" />
		</a>
	{/each}
</div>
