<script lang="ts">
	import { socialLinks } from '$lib/common/socialLinks';
	import Button from '$lib/components/Button.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="stack gap-6">
	{#each socialLinks as social}
		<a href={social.url} target="_blank">
			<Button>
				<div class="center h-[30px]">
					<Icon icon={social.icon} height="100%" />
				</div>
				<p>
					{social.label}
				</p>
			</Button>
		</a>
	{/each}
</div>
