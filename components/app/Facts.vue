<template>
	<div class="container-fluid facts py-5 pt-lg-0" id="facts">
		<div class="container py-5 pt-lg-0">
			<div class="row gx-0">
				<div class="col-lg-4" id="happy_client">
					<div
						class="bg-primary shadow d-flex align-items-center justify-content-center p-4"
						style="height: 150px">
						<div
							class="bg-white d-flex align-items-center justify-content-center rounded mb-2"
							style="width: 60px; height: 60px">
							<i class="fa fa-users text-primary"></i>
						</div>
						<div class="ps-4">
							<h5 class="text-white mb-0">Des clients satisfaits</h5>
						</div>
					</div>
				</div>
				<div class="col-lg-4" id="project_done">
					<div
						class="bg-light shadow d-flex align-items-center justify-content-center p-4"
						style="height: 150px">
						<div
							class="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
							style="width: 60px; height: 60px">
							<i class="fa fa-check text-white"></i>
						</div>
						<div class="ps-4">
							<h5 class="text-primary mb-0">Des projets effectués</h5>
						</div>
					</div>
				</div>
				<div class="col-lg-4" id="win_awards">
					<div
						class="bg-primary shadow d-flex align-items-center justify-content-center p-4"
						style="height: 150px">
						<div
							class="bg-white d-flex align-items-center justify-content-center rounded mb-2"
							style="width: 60px; height: 60px">
							<i class="fa fa-award text-primary"></i>
						</div>
						<div class="ps-4">
							<h5 class="text-white mb-0">Des retours positifs</h5>
						</div>
					</div>
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
		const timeline = gsap.timeline({
			yoyo: true,
			scrollTrigger: {
				trigger: '#facts',
				toggleActions: 'restart reverse reverse resume',
			},
		});
		timeline.from('#facts', {
			ease: 'fade',
			duration: 1,
			scale: 0.9,
		});
	}
</script>
