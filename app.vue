<script setup>
	if (process.client) {
		document.addEventListener('mousemove', function (e) {
			var circularCursor = document.getElementById('circularcursor');
			circularCursor.style.left = e.pageX + 'px';
			circularCursor.style.top = e.pageY + 'px';
		});
	}
</script>
<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
