<script lang="ts">
	import { socialLinks } from '$lib/common/socialLinks';
	import Icon from '@iconify/svelte';
</script>

<div class="stack gap-6">
	{#each socialLinks as social}
		<div class="hstack items-center gap-2">
			<a href={social.url} target="_blank" class="center h-[30px] social-link">
				<Icon icon={social.icon} height="100%" />
			</a>
			<p>
				{social.label}
			</p>
		</div>
	{/each}
</div>

<style>
	.social-link {
		filter: drop-shadow(5px 1px 3px rgb(230, 230, 230));
	}
</style>
