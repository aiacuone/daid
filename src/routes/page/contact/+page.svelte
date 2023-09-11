<script lang="ts">
	import { icons } from '$lib';
	import Icon from '@iconify/svelte';

	const socials = [
		{
			label: 'linkedin',
			link: 'https://www.linkedin.com/in/dahyad/?originalSubdomain=uk',
			icon: icons.linkedin
		},
		{
			label: 'instagram',
			link: 'https://www.instagram.com/dip_age/',
			icon: icons.instagram
		},
		{
			label: 'tiktok',
			link: 'https://www.tiktok.com/@dipzlikechipz_',
			icon: icons.tiktok
		}
	];
</script>

<div class="hstack gap-6">
	{#each socials as social}
		<a href={social.link} target="_blank" class="center h-[35px] sm:h-[50px]">
			<Icon icon={social.icon} height="100%" />
		</a>
	{/each}
</div>
