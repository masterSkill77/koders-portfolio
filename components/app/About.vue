<template>
	<div
		class="container-fluid py-5 wow fadeInUp"
		data-wow-delay="0.1s"
		style="
			visibility: visible;
			animation-delay: 0.1s;
			animation-name: fadeInUp;
		">
		<div class="container py-5">
			<div class="row g-5">
				<div class="col-lg-5" style="min-height: 500px">
					<div class="position-relative h-100">
						<img
							class="w-100 h-100 rounded"
							id="image_demo"
							src="/img/about.jpg" />
					</div>
				</div>
				<div class="col-lg-7">
					<div class="section-title position-relative pb-3 mb-5">
						<CommonsTitle
							tag="h3"
							class="fw-bold text-primary text-uppercase"
							text="About Us" />
						<CommonsTitle
							tag="h1"
							text="The Best IT Solution With 10 Years of Experience" />
					</div>
					<CommonsText
						tag="p"
						class="mb-4"
						text="Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
						sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
						et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
						tempor eirmod magna dolore erat amet" />
					<div class="row g-0 mb-3">
						<div
							class="col-sm-6 wow zoomIn"
							data-wow-delay="0.2s"
							style="
								visibility: visible;
								animation-delay: 0.2s;
								animation-name: zoomIn;
							">
							<h5 class="mb-3">
								<i class="fa fa-check text-primary me-3"></i>Award Winning
							</h5>
							<h5 class="mb-3">
								<i class="fa fa-check text-primary me-3"></i>Professional Staff
							</h5>
						</div>
						<div
							class="col-sm-6 wow zoomIn"
							data-wow-delay="0.4s"
							style="
								visibility: visible;
								animation-delay: 0.4s;
								animation-name: zoomIn;
							">
							<h5 class="mb-3">
								<i class="fa fa-check text-primary me-3"></i>24/7 Support
							</h5>
							<h5 class="mb-3">
								<i class="fa fa-check text-primary me-3"></i>Fair Prices
							</h5>
						</div>
					</div>
					<div
						class="d-flex align-items-center mb-4 wow fadeIn"
						data-wow-delay="0.6s"
						style="
							visibility: visible;
							animation-delay: 0.6s;
							animation-name: fadeIn;
						">
						<div
							class="bg-primary d-flex align-items-center justify-content-center rounded"
							style="width: 60px; height: 60px">
							<i class="fa fa-phone-alt text-white"></i>
						</div>
						<div class="ps-4">
							<CommonsTitle
								tag="h4"
								class="mb-2"
								text="Call to ask any question"></CommonsTitle>
							<CommonsTitle
								tag="h5"
								class="text-primary mb-0"
								text="+012 345 6789"></CommonsTitle>
						</div>
					</div>
					<a
						href="quote.html"
						class="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
						data-wow-delay="0.9s"
						style="
							visibility: hidden;
							animation-delay: 0.9s;
							animation-name: none;
						"
						>Request A Quote</a
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#image_demo', {
			ease: 'fade',
			scrollTrigger: {
				trigger: '#image_demo',
				toggleActions: 'restart reverse resume resume',
			},
			yoyo: true,
			duration: 1,
			x: -100,
		});
	}
</script>
