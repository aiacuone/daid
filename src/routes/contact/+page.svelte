<script lang="ts">
	import { icons } from '$lib/common/icons';
	import { socialLinks } from '$lib/common/socialLinks';
	import Button from '$lib/components/Button.svelte';
	import ButtonContainer from '$lib/components/ButtonContainer.svelte';
	import DaidDark from '$lib/svgs/DaidDark.svelte';
	import qrcode from 'qrcode';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { notifications } from '$lib/components/Toast/notifications';
	import { validateEmail } from '$lib/utils/email';

	let qrCodeModal: HTMLDialogElement;
	let qrCodeCanvas: HTMLCanvasElement;
	let emailInputValue: string;

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

	const onSubscribe = async () => {
		if (!emailInputValue) return notifications.error('Please enter an email', 3000);

		const isValidEmail = validateEmail(emailInputValue);
		if (!isValidEmail) return notifications.error('Please enter a valid email', 3000);

		try {
			const {
				data: { success }
			} = await axios.post('/subscribe', { body: { email: emailInputValue } });
			if (success) {
				notifications.success('You have subscribed', 3000);
				emailInputValue = '';
			}
		} catch (error) {
			notifications.error('Something went wrong', 3000);
		}
	};
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
<div>
	<p>Suscribe</p>
	<div class="flex flex-col sm:flex-row gap-3">
		<input
			type="text"
			class="bg-neutral-100 px-2 py-1 rounded-md w-[300px]"
			placeholder="email"
			bind:value={emailInputValue}
		/>
		<button class="brand-background px-2 py-1 rounded-md self-center" on:click={onSubscribe}
			>submit</button
		>
	</div>
</div>

<dialog bind:this={qrCodeModal} class="w-full max-w-[400px]">
	<div class="stack w-full center gap-1 min-h-[300px]">
		<DaidDark height="25px" />
		<canvas bind:this={qrCodeCanvas} width="300" height="300" />
		<div class="self-center">
			<Button onClick={() => qrCodeModal.close()}>Close</Button>
		</div>
	</div>
</dialog>
