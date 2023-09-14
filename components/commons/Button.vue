<script setup>
	const { color, animated, animation, variant } = defineProps([
		'color',
		'animated',
		'animation',
		'variant',
	]);
</script>
<template>
	<button
		:class="`btn btn-${
			variant ? variant + '-' : ''
		}${color} me-3 py-md-3 px-md-5 ${animated ? 'animated' : ''} ${animation}`">
		<slot />
	</button>
</template>
