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
							style="object-fit: cover"
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
							<CommonsTitle
								class="mb-3"
								tag="h5"
								text="Award winning"
								icon="check"
								icon-color="primary"
								icon-position="start" />

							<CommonsTitle
								class="mb-3"
								tag="h5"
								text="Professionnal staff"
								icon="check"
								icon-color="primary"
								icon-position="start" />
						</div>
						<div
							class="col-sm-6 wow zoomIn"
							data-wow-delay="0.4s"
							style="
								visibility: visible;
								animation-delay: 0.4s;
								animation-name: zoomIn;
							">
							<CommonsTitle
								class="mb-3"
								tag="h5"
								text="24/7 Support"
								icon="check"
								icon-color="primary"
								icon-position="start" />

							<CommonsTitle
								class="mb-3"
								tag="h5"
								text="Fair Prices"
								icon="check"
								icon-color="primary"
								icon-position="start" />
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
							style="width: 60px; height: 60px; border-radius: 30px !important">
							<i id="phone_number" class="fa fa-phone-alt text-white"></i>
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
						href="/"
						class="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
						data-wow-delay="0.9s"
						id="request_quote"
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
				toggleActions: 'restart reverse restart resume',
			},
			yoyo: true,
			duration: 1,
			x: -100,
		});

		gsap.to('#request_quote', {
			ease: 'power2.inOut',
			scrollTrigger: {
				trigger: '#request_quote',
				toggleActions: 'restart reverse restart resume',
				scrub: true,
			},
			opacity: 1,
			duration: 2.5,
			scale: 1.2,
		});

		gsap.to('#phone_number', {
			ease: 'power2.inOut',
			scrollTrigger: {
				trigger: '#phone_number',
				toggleActions: 'restart reverse reverse resume',
				scrub: true,
			},
			opacity: 1,
			duration: 1,
			rotate: 360,
		});
	}
</script>
