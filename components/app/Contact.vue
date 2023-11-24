<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#contact-container', {
			ease: 'fade',
			scrollTrigger: {
				trigger: '#contact-container',
				toggleActions: 'restart pause pause resume',
			},
			duration: 1,
			x: -500,
			opacity: 0,
		});
	}
</script>
<template>
	<div class="container-fluid py-5">
		<div class="container py-5">
			<div class="row g-5">
				<div class="col-lg-7" id="contact-container">
					<div class="section-title position-relative pb-3 mb-5">
						<CommonsTitle
							tag="h5"
							class="fw-bold text-primary text-uppercase"
							text="Request A Quote" />
						<CommonsTitle
							text="Need A Free Quote? Please Feel Free to Contact Us"
							tag="h1" />
					</div>
					<div class="row gx-3">
						<div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
							<CommonsTitle
								icon="reply"
								icon-color="primary"
								tag="h5"
								icon-position="start"
								text="Reply within 24 hours" />
						</div>
						<div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
							<CommonsTitle
								icon="phone-alt"
								icon-color="primary"
								icon-position="start"
								class="mb-4"
								tag="h5"
								text="24 hrs telephone support" />
						</div>
					</div>
					<CommonsText
						tag="p"
						class="mb-4"
						text=" Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed." />
					<div
						class="d-flex align-items-center mt-2 wow zoomIn"
						data-wow-delay="0.6s">
						<div
							class="bg-primary d-flex align-items-center justify-content-center rounded"
							style="width: 60px; height: 60px">
							<i class="fa fa-phone-alt text-white"></i>
						</div>
						<div class="ps-4">
							<CommonsTitle
								tag="h5"
								class="mb-2"
								text="Call to ask any question" />
							<CommonsTitle
								tag="h4"
								class="text-primary mb-0"
								text="+261 34 68 047 17" />
						</div>
					</div>
				</div>
				<div class="col-lg-5">
					<CommonsContactCard />
				</div>
			</div>
		</div>
	</div>
</template>
