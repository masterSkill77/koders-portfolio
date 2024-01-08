<script setup>
	import { useLoading } from 'stores/useLoading';
	useLoading().setLoading(true);
	setTimeout(() => {
		useLoading().setLoading(false);
	}, 2000);
</script>
<template>
	<div>
		<AppAbout />
	</div>
</template>
