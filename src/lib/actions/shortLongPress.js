export function shortLongPress(node, duration = 3000) {
	let pressTimer;
	let isLongPress = false;

	// Attach mousedown event handler
	node.addEventListener('mousedown', () => {
		pressTimer = setTimeout(() => {
			// options.longPress();
			isLongPress = true;
			node.dispatchEvent(new CustomEvent('long-press'));
		}, duration);
		isLongPress = false;
	});

	// Attach mouseup event handler
	node.addEventListener('mouseup', () => {
		clearTimeout(pressTimer);
		if (pressTimer && !isLongPress) {
			node.dispatchEvent(new CustomEvent('short-press'));
		}
	});

	// Ensure cleanup when the component unmounts
	return {
		destroy() {
			node.removeEventListener('mousedown');
			node.removeEventListener('mouseup');
			clearTimeout(pressTimer);
		}
	};
}
