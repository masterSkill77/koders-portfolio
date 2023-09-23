<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#service-container', {
			ease: 'fade',
			scrollTrigger: {
				trigger: '#service-container',
				toggleActions: 'restart pause pause resume',
			},
			duration: 1,
			y: -200,
			opacity: 0,
		});
	}
</script>
<template>
	<div class="container-fluid">
		<div class="container py-5" id="service-container">
			<div
				class="section-title text-center position-relative pb-3 mb-5 mx-auto"
				style="max-width: 600px">
				<CommonsTitle
					class="fw-bold text-primary text-uppercase"
					text="Our Services"
					tag="h5" />
				<CommonsTitle
					tag="h1"
					text="Custom IT Solutions for Your Successful Business" />
			</div>
			<div class="row g-5">
				<div
					class="col-lg-4 col-md-6 wow zoomIn"
					data-wow-delay="0.3s"
					style="
						visibility: visible;
						animation-delay: 0.3s;
						animation-name: zoomIn;
					">
					<div
						class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
						<div class="service-icon">
							<i class="fa fa-shield-alt text-white"></i>
						</div>
						<CommonsTitle tag="h4" text="Cyber Security" class="mb-3" />
						<CommonsText
							tag="p"
							text="Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
							ipsum dolore sed" />
						<a class="btn btn-lg btn-primary rounded" href="">
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
