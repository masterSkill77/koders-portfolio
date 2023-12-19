<script setup>
	import { useLoading } from 'stores/useLoading';
	useLoading().setLoading(true);
	setTimeout(() => {
		useLoading().setLoading(false);
	}, 2000);
</script>
<template>
	<div>
		<LazyAppFacts />
		<LazyAppAbout />
		<LazyAppService />
		<LazyAppTestimonial />
		<LazyAppTechno />
		<LazyAppTeams />
		<LazyAppContact />
	</div>
</template>
