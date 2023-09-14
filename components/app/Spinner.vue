<script setup>
	const isLoading = ref(true);
	setTimeout(() => {
		isLoading.value = false;
	}, 2000);
</script>
<template>
	<div
		v-if="isLoading"
		class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
		<div class="spinner"></div>
	</div>
</template>
