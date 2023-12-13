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
		timeline.from('#teams-title', {
			opacity: 0,
			x: 500,
			duration: 0.7,
		});
		timeline.from('#card-1', {
			opacity: 0,
			scale: 0.7,
			duration: 0.7,
		});

		timeline.from('#card-2', {
			opacity: 0,
			scale: 0.7,
			duration: 0.7,
		});

		timeline.from('#card-3', {
			opacity: 0,
			scale: 0.7,
			duration: 0.7,
		});
	}


	const teamMembers = ref([
		 {
			name: "RAJAONARISON Clairmont",
			designation: "Développeur Full-Stack",
			image: "/img/clairmont.jpg"
		 },
		 {
			name: "MAHITSILAZA Fabriola",
			designation: "Développeur Full-Stack",
			image: "/img/Oskar.jpg"
		 },
		 {
			name: "RANDRIANANTENAINA Tojonjanahary",
			designation: "Développeur Full-Stack",
			image: "/img/Tojo.jpg"
		 },
		 {
			name: "RAENINOROARISON Osmin",
			designation: "Développeur Full-Stack",
			image: "/img/Osmin.jpg"
		 }, 
	])
</script>

<template>
	<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
		<div class="container py-5">
			<div
				id="teams-title"
				class="section-title text-center position-relative pb-3 mb-5 mx-auto"
				style="max-width: 600px">
				<CommonsTitle
					tag="h5"
					class="fw-bold text-primary text-uppercase"
					text="Nos collaborateurs" />
				<CommonsTitle
					tag="h1"
					text="Des professionnels, des talents rares, une équipe au complet" />
			</div>
			<div class="row g-5" id="teams-section">
				<div class="col-lg-4" id="" v-for="member in teamMembers" :key="member.name">
					<CommonsTeamsCard :name="member.name" :designation="member.designation" :image="member.image" />
				</div>
			</div>
		</div>
	</div>
</template>
