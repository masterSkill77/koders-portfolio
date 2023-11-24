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
						<div style="height: 150px">
							<swiper-container
								slides-per-view="4"
								:autoplay="{ delay: 1 }"
								speed="3000"
								loop="true">
								<swiper-slide
									><img src="/img/vendor-1.jpg" alt="" loading="lazy"
								/></swiper-slide>
								<swiper-slide
									><img src="/img/vendor-2.jpg" alt="" loading="lazy"
								/></swiper-slide>
								<swiper-slide
									><img src="/img/vendor-3.jpg" alt="" loading="lazy"
								/></swiper-slide>
								<swiper-slide
									><img src="/img/vendor-4.jpg" alt="" loading="lazy"
								/></swiper-slide>
								<swiper-slide
									><img src="/img/vendor-5.jpg" alt="" loading="lazy"
								/></swiper-slide>
								<swiper-slide
									><img src="/img/vendor-6.jpg" alt="" loading="lazy"
								/></swiper-slide>
								<swiper-slide
									><img src="/img/vendor-7.jpg" alt="" loading="lazy"
								/></swiper-slide>
								<swiper-slide
									><img src="/img/vendor-8.jpg" alt="" loading="lazy"
								/></swiper-slide>
								<swiper-slide
									><img src="/img/vendor-9.jpg" alt="" loading="lazy"
								/></swiper-slide>
							</swiper-container>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
