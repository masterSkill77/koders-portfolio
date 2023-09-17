<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#card-contact', {
			ease: 'fade',
			scrollTrigger: {
				trigger: '#card-contact',
				toggleActions: 'restart pause pause resume',
			},
			duration: 1,
			scale: 0.5,
			opacity: 0,
		});
	}
</script>
<template>
	<div
		class="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn"
		id="card-contact"
		data-wow-delay="0.9s">
		<form>
			<div class="row g-3">
				<div class="col-xl-12">
					<input
						type="text"
						class="form-control bg-light border-0"
						placeholder="Your Name"
						style="height: 55px" />
				</div>
				<div class="col-12">
					<input
						type="email"
						class="form-control bg-light border-0"
						placeholder="Your Email"
						style="height: 55px" />
				</div>
				<div class="col-12">
					<select class="form-select bg-light border-0" style="height: 55px">
						<option selected>Select A Service</option>
						<option value="1">Service 1</option>
						<option value="2">Service 2</option>
						<option value="3">Service 3</option>
					</select>
				</div>
				<div class="col-12">
					<textarea
						class="form-control bg-light border-0"
						rows="3"
						placeholder="Message"></textarea>
				</div>
				<div class="col-12">
					<button class="btn btn-dark w-100 py-3" type="submit">
						Request A Quote
					</button>
				</div>
			</div>
		</form>
	</div>
</template>
