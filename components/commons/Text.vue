<script setup>
	const { text, tag } = defineProps({
		tag: {
			type: String,
			required: false,
			default: 'p',
		},
		text: { type: String, default: '' },
	});
</script>
<template>
	<component :is="tag">{{ text }}</component>
</template>
