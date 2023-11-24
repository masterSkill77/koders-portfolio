<script setup>
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
</script>
<template>
	<div class="container-fluid py-5">
		<div class="container py-5">
			<div
				id="pricing-title"
				class="section-title text-center position-relative pb-3 mb-5 mx-auto"
				style="max-width: 600px">
				<CommonsTitle
					tag="h5"
					text="Technologies"
					class="fw-bold text-primary text-uppercase" />
				<CommonsTitle
					text="Nous utilisons les differentes technologies suivantes"
					tag="h1" />
			</div>
			<div>
				<div class="container-fluid py-5">
					<div class="container py-0">
						<swiper-container
							slides-per-view="6"
							:autoplay="{ delay: 1 }"
							speed="3000"
							loop="true">
							<swiper-slide
								><img
									src="/img/techno/solidity.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/php.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/javascript.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/css.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/tailwind.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/java.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/react.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/vuejs.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/nuxt.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/angular.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/mysql.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/mongodb.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/laravel.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/nodejs.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/spring.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/symfony.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>

							<swiper-slide
								><img
									src="/img/techno/rest_api.png"
									alt=""
									loading="lazy"
									class="swipper-img"
							/></swiper-slide>
						</swiper-container>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	.swipper-img {
		width: 75%;
		object-fit: fill;
	}
</style>
