<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';

	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline({
			smoothChildTiming: true,
			scrollTrigger: {
				trigger: '#teams-section',
				toggleActions: 'restart pause restart resume',
			},
		});

		timeline.from('#card-1', {
			opacity: 0,
			scale: 0.7,
			duration: 1.3,
		});

		timeline.from('#card-2', {
			opacity: 0,
			scale: 0.7,
			duration: 1.3,
		});

		timeline.from('#card-3', {
			opacity: 0,
			scale: 0.7,
			duration: 1.3,
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
					class="fw-bold text-primary text-uppercase"
					text="Team Members" />
				<CommonsTitle
					tag="h1"
					text="Professional Stuffs Ready to Help Your Business" />
			</div>
			<div class="row g-5" id="teams-section">
				<div class="col-lg-4" id="card-1">
					<CommonsTeamsCard />
				</div>
				<div class="col-lg-4" id="card-2">
					<CommonsTeamsCard />
				</div>
				<div class="col-lg-4" id="card-3">
					<CommonsTeamsCard />
				</div>
			</div>
		</div>
	</div>
</template>
