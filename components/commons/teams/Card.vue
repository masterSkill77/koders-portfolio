<script setup>
	const { title, description } = defineProps({
		name: { type: String, required: false },
		designation: { type: String, required: false },
		image: { type: String, required: false}
	});
</script>
<template>
	<div class="team-item bg-light rounded overflow-hidden">
		<div class="team-img position-relative overflow-hidden">
			<img class="img-fluid w-100" :src="image" loading="lazy" alt="" />
			<div class="team-social">
				<a class="btn btn-lg btn-primary btn-lg-square rounded" href=""
					><i class="fab fa-twitter fw-normal"></i
				></a>
				<a class="btn btn-lg btn-primary btn-lg-square rounded" href=""
					><i class="fab fa-facebook-f fw-normal"></i
				></a>
				<a class="btn btn-lg btn-primary btn-lg-square rounded" href=""
					><i class="fab fa-instagram fw-normal"></i
				></a>
				<a class="btn btn-lg btn-primary btn-lg-square rounded" href=""
					><i class="fab fa-linkedin-in fw-normal"></i
				></a>
			</div>
		</div>
		<div class="text-center py-4">
			<h4 class="text-primary">{{ name }}</h4>
			<p class="text-uppercase m-0">{{ designation }}</p>
		</div>
	</div>
</template>