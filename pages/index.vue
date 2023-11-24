<script setup>
	import { useLoading } from 'stores/useLoading';
	useLoading().setLoading(true);
	setTimeout(() => {
		useLoading().setLoading(false);
	}, 2000);
</script>
<template>
	<div>
		<AppFacts />
		<AppAbout />
		<AppService />
		<AppTeams />
		<AppTechno />
		<AppContact />
	</div>
</template>
