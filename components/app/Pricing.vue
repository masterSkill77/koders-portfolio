<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';

	if (process.client) {
		gsap.registerPlugin(ScrollTrigger);

		// Créez une timeline pour coordonner les animations
		const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

		// Animation du titre
		timeline.from('#pricing-title', {
			opacity: 0,
			scale: 0.7,
			duration: 1,
		});

		// Animation des cartes
		const cards = ['.plan1', '.plan2', '.plan3'];
		cards.forEach((card, index) => {
			timeline.from(card, {
				opacity: 0,
				scale: 0.5,
				y: 50,
				duration: 0.5,
				delay: index * 0.2, // Ajoute un léger délai pour les cartes suivantes
			});
		});

		// Déclencheur de défilement pour la timeline
		ScrollTrigger.create({
			trigger: '#pricing-title', // Changer cela en fonction de l'élément de déclenchement souhaité
			animation: timeline,
			start: 'top 80%', // Ajustez cette valeur selon vos besoins
			end: 'bottom 80%', // Ajustez cette valeur selon vos besoins
			toggleActions: 'restart none reverse resume',
		});
	}
</script>

<template>
	<div class="container-fluid py-5 wow fadeInUp">
		<div class="container py-5">
			<div
				id="pricing-title"
				class="section-title text-center position-relative pb-3 mb-5 mx-auto"
				style="max-width: 600px">
				<CommonsTitle
					tag="h5"
					text="Pricing Plans"
					class="fw-bold text-primary text-uppercase" />
				<CommonsTitle
					text="We are Offering Competitive Prices for Our Clients"
					tag="h1" />
			</div>
			<div class="row g-4">
				<CommonsPriceCard
					class="plan1"
					title="Basic Plan"
					description="For small business" />
				<CommonsPriceCard
					class="plan2 z-1"
					title="Basic Plan"
					description="For small business" />
				<CommonsPriceCard
					class="plan3"
					title="Basic Plan"
					description="For small business" />
			</div>
		</div>
	</div>
</template>
