<script lang="ts">
	import { localLinks } from '$lib/common/localLinks';
	import Button from '$lib/components/Button.svelte';
	import ButtonContainer from '$lib/components/ButtonContainer.svelte';
	import DaidDark from '$lib/svgs/DaidDark.svelte';
</script>

<div class="stack center gap-6">
	<div class="hidden sm:flex">
		<DaidDark height="30px" />
	</div>
	<ButtonContainer>
		{#each localLinks as link}
			<a href={link.path}>
				<Button icon={link.icon} iconColor="rgb(220, 220, 220)">
					{link.label}
				</Button>
			</a>
		{/each}
	</ButtonContainer>
</div>
