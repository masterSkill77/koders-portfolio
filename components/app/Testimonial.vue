<script setup>
	// import { register } from 'swiper/element/bundle';
	// // register Swiper custom elements
	// register();
	const testimonials = ref([]);
	onMounted(async () => {
		const data = await useFetchData('/testimonials');
		testimonials.value = data;
	});

	const slidePerView = 4;
</script>
<template>
	<div class="container-fluid py-5">
		<div class="container py-5">
			<div
				class="section-title text-center position-relative pb-3 mb-4 mx-auto"
				style="max-width: 600px">
				<h5 class="fw-bold text-primary text-uppercase">Témoignages</h5>
				<h1 class="mb-0">Ce que nos collaborateurs pensent de nous</h1>
			</div>
			<div class="testimonial-carousel">
				<swiper-container
					v-if="testimonials.length > slidePerView"
					:slides-per-view="slidePerView"
					:autoplay="{ delay: 2000 }"
					speed="2000"
					loop="true">
					<swiper-slide
						v-for="testimonial in testimonials"
						:key="testimonial.id"
						class="testimonial-item"
						style="justify-content: center !important">
						<div class="testimonial__item">
							<div
								class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
								<img
									class="img-fluid rounded"
									:src="testimonial.photo"
									style="width: 60px; height: 60px; object-fit: cover" />
								<div class="ps-4">
									<h4 class="text-primary mb-1">{{ testimonial.client }}</h4>
									<small class="text-uppercase">{{ testimonial.title }}</small>
								</div>
							</div>
							<div
								class="pt-4 pb-5 px-5"
								v-html="testimonial.description"></div>
						</div>
					</swiper-slide>
				</swiper-container>
				<div class="row justify-content-center" v-else>
					<div
						v-for="testimonial in testimonials"
						:key="testimonial.id"
						class="testimonial-item"
						style="justify-content: center !important">
						<div class="testimonial__item">
							<div
								class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
								<img
									class="img-fluid rounded"
									:src="testimonial.photo"
									style="width: 60px; height: 60px; object-fit: cover" />
								<div class="ps-4">
									<h4 class="text-primary mb-1">{{ testimonial.client }}</h4>
									<small class="text-uppercase">{{ testimonial.title }}</small>
								</div>
							</div>
							<div
								class="pt-4 pb-5 px-5"
								v-html="testimonial.description"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.testimonial-item {
		width: 400px !important;
		margin: 20px !important;
		box-shadow: #0000004a 6px 5px 20px;
	}
	.swiper-wrapper {
		justify-content: center !important;
	}
</style>
