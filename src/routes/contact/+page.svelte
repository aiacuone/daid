<script lang="ts">
	import { socialLinks } from '$lib/common/socialLinks';
	import Button from '$lib/components/Button.svelte';
	import ButtonContainer from '$lib/components/ButtonContainer.svelte';
</script>

<ButtonContainer>
	{#each socialLinks as social}
		<a href={social.url} target="_blank">
			<Button icon={social.icon}>
				{social.label}
			</Button>
		</a>
	{/each}
</ButtonContainer>
