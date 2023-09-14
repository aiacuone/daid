<script lang="ts">
	import { icons } from '$lib/common/icons';
	import { socialLinks } from '$lib/common/socialLinks';
	import Button from '$lib/components/Button.svelte';
	import ButtonContainer from '$lib/components/ButtonContainer.svelte';
	import DaidDark from '$lib/svgs/DaidDark.svelte';
	import qrcode from 'qrcode';
	import { onMount } from 'svelte';

	let qrCodeModal: HTMLDialogElement;
	let qrCodeCanvas: HTMLCanvasElement;

	onMount(() => {
		qrcode.toCanvas(qrCodeCanvas, 'daid-ltd.com');
		const clickOutside = (e: MouseEvent) => {
			const dialogDimensions = qrCodeModal.getBoundingClientRect();
			if (
				e.clientX < dialogDimensions.left ||
				e.clientX > dialogDimensions.right ||
				e.clientY < dialogDimensions.top ||
				e.clientY > dialogDimensions.bottom
			) {
				qrCodeModal.close();
			}
		};
		qrCodeModal.addEventListener('click', clickOutside);
		return () => {
			qrCodeModal.removeEventListener('click', clickOutside);
		};
	});
</script>

<ButtonContainer>
	{#each socialLinks as social}
		<a href={social.url} target="_blank">
			<Button icon={social.icon}>
				{social.label}
			</Button>
		</a>
	{/each}
	<Button icon={icons.qrCode} onClick={() => qrCodeModal.showModal()}>QR Code</Button>
</ButtonContainer>

<dialog bind:this={qrCodeModal} class="w-full max-w-[400px]">
	<div class="stack w-full center gap-1 min-h-[300px]">
		<DaidDark height="25px" />
		<canvas bind:this={qrCodeCanvas} width="300" height="300" />
		<div class="self-center">
			<Button onClick={() => qrCodeModal.close()}>Close</Button>
		</div>
	</div>
</dialog>
