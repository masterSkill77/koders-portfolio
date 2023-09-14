<script setup>
	import { storeToRefs } from 'pinia';
	import { useLoading } from 'stores/useLoading';
	const { loading } = storeToRefs(useLoading());
</script>
<template>
	<div>
		<div
			v-if="loading"
			:class="`bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center ${
				loading ? 'show' : ''
			}`">
			<div class="spinner"></div>
		</div>
	</div>
</template>
<style computed>
	.show {
		z-index: 5000;
	}
</style>
