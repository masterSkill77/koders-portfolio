<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('.plan1', {
			ease: 'fade',
			scrollTrigger: {
				trigger: '.plan1',
				toggleActions: 'restart reverse restart resume',
			},
			yoyo: true,
			opacity: 0,
			scale: 0.5,
		});
		gsap.from('.plan2', {
			ease: 'fade',
			scrollTrigger: {
				trigger: '.plan2',
				toggleActions: 'restart reverse restart resume',
			},
			yoyo: true,
			opacity: 0,
			scale: 0.5,
		});
		gsap.from('.plan3', {
			ease: 'fade',
			scrollTrigger: {
				trigger: '.plan3',
				toggleActions: 'restart reverse restart resume',
			},
			yoyo: true,
			opacity: 0,
			scale: 0.5,
		});
	}
</script>
<template>
	<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
		<div class="container py-5">
			<div
				class="section-title text-center position-relative pb-3 mb-5 mx-auto"
				style="max-width: 600px">
				<CommonsTitle
					tag="h5"
					text="Pricing Plans"
					class="fw-bold text-primary text-uppercase" />
				<CommonsTitle
					text="We are Offering Competitive Prices for Our Clients"
					tag="h1" />
			</div>
			<div class="row g-4">
				<CommonsPriceCard
					class="plan1"
					title="Basic Plan"
					description="For small business" />
				<CommonsPriceCard
					class="plan2 z-1"
					title="Basic Plan"
					description="For small business" />
				<CommonsPriceCard
					class="plan3"
					title="Basic Plan"
					description="For small business" />
			</div>
		</div>
	</div>
</template>
