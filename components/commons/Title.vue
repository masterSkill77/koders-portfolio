<script setup>
	const { text, tag, icon, iconColor, iconPosition } = defineProps({
		tag: {
			type: String,
			required: false,
			default: 'h1',
		},
		text: { type: String, default: '' },
		icon: { type: String, default: '' },
		iconColor: { type: String, default: 'primary' },
		iconPosition: { type: String, default: '' },
	});
</script>
<template>
	<component :is="tag"
		><i
			:class="`fa fa-${icon} text-${iconColor} me-3`"
			v-if="icon && iconPosition == 'start'"></i>
		{{ text
		}}<i
			:class="`fa fa-${icon} text-${iconColor} me-3`"
			v-if="icon && iconPosition == 'end'"></i
	></component>
</template>
