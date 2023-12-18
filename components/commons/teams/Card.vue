<script setup>
	const { title, description, image, slogan } = defineProps({
		name: { type: String, required: false },
		designation: { type: Array, required: false },
		image: { type: String, required: false },
		slogan: { type: String, required: false },
	});
</script>
<template>
	<div class="team-item bg-light rounded overflow-hidden">
		<div class="team-img position-relative overflow-hidden">
			<img class="img-fluid w-100" :src="image" loading="lazy" alt="" />
			<div class="team-social">
				<a class="btn text-white rounded" href="">" {{ slogan }} " </a>
			</div>
		</div>
		<div class="text-center p-2">
			<h4 class="text-primary">{{ name }}</h4>
			<hr />
			<p class="text-uppercase m-0">{{ designation.join(' | ') }}</p>
		</div>
	</div>
</template>

<style scoped>
	img.img-fluid {
		height: 350px !important;
		object-fit: cover;
	}
	.team-item {
		height: 550px !important;
		/* width: 300px; */
	}
</style>
