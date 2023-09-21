<script setup>
	import { useLoading } from 'stores/useLoading';
	setTimeout(() => {
		useLoading().setLoading(false);
	}, 2000);
</script>
<template>
	<div>
		<AppFacts />
		<AppAbout />
		<AppService />
		<AppPricing />
		<AppTeams />
		<AppContact />
	</div>
	<CommonsBackTop />
</template>
