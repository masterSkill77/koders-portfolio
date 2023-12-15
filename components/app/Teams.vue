<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';

	const teamMembers = ref([
		{
			id: 1,
			name: 'MAHITSILAZA Fabriola',
			designation: 'CEO | Co-fondateur | Développeur Full-Stack',
			image: '/img/Oskar.jpg',
		},
		{
			id: 2,
			name: 'RANDRIANANTENAINA Tojonjanahary',
			designation: 'Co-fondateur | Développeur Full-Stack',
			image: '/img/Tojo.jpg',
		},
		{
			id: 3,
			name: 'RAJAONARISON Clairmont',
			designation: 'Co-fondateur | Développeur Full-Stack',
			image: '/img/clairmont.jpg',
		},
		{
			id: 4,
			name: 'RAENINOROARISON Osmin',
			designation: 'Co-fondateur | Développeur Full-Stack',
			image: '/img/Osmin.jpg',
		},
	]);
	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		console.log('mounted');
		launchAnimation();
	});

	const launchAnimation = () => {
		if (process.client) {
			const timeline = gsap.timeline({
				smoothChildTiming: true,
				scrollTrigger: {
					trigger: '#teams-section',
					toggleActions: 'restart pause resume reset',
				},
			});
			timeline.from('#teams-title', {
				opacity: 0,
				x: 500,
				duration: 0.7,
			});
			teamMembers.value.forEach((member) => {
				timeline.from('#card-' + member.id, {
					opacity: 0,
					scale: 0.7,
					duration: 0.7,
				});
			});
		}
	};
</script>

<template>
	<div class="container-fluid py-5">
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
				<div
					class="col-lg-3"
					v-for="member in teamMembers"
					:id="`card-${member.id}`"
					:key="member.name">
					<CommonsTeamsCard
						:name="member.name"
						:designation="member.designation"
						:image="member.image" />
				</div>
			</div>
		</div>
	</div>
</template>
