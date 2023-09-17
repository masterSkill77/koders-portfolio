<script setup>
	const { text, tag } = defineProps({
		tag: {
			type: String,
			required: false,
			default: 'h1',
		},
		text: { type: String, default: '' },
	});
</script>
<template>
	<component :is="tag">{{ text }}</component>
</template>
