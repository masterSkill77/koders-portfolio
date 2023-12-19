<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	gsap.registerPlugin(ScrollTrigger);
	const data = await useFetchData('/teams');
	const teamMembers = ref(data.reverse());

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
			data.forEach((member) => {
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
					text="Notre équipe" />
				<CommonsTitle
					tag="h1"
					text="Des professionnels, des talents rares, une équipe au complet" />
			</div>
			<div class="d-flex gap-5 justify-content-center" id="teams-section">
				<div
					class="col-lg-3"
					v-for="member in teamMembers"
					:id="`card-${member.id}`"
					:key="member.name">
					<CommonsTeamsCard
						:name="member.name"
						:designation="member.post"
						:slogan="member.function"
						:image="member.photo" />
				</div>
			</div>
		</div>
	</div>
</template>
