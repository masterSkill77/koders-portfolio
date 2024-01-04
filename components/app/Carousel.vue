<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	import { Flip } from 'gsap/Flip';
	import { TextPlugin } from 'gsap/TextPlugin';
	gsap.registerPlugin(ScrollTrigger, Flip, TextPlugin); // Register plugin first

	onMounted(() => {
		if (process.client) {
			gsap.to('#text-animate', 4, {
				text: "Une entreprise jeune, dynamique &amp; Innovante dans le domaine de l'IT",
				ease: 'none',
				scrollTrigger: {
					trigger: '#text-animate',
					toggleActions: 'restart restart restart restart',
				},
			});
			// Créer une timeline GSAP
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '#text-animate',
					toggleActions: 'restart restart resume restart',
				},
			});
		}
	});
</script>

<template>
	<div
		id="header-carousel"
		class="carousel slide carousel-fade"
		data-bs-ride="carousel">
		<div
			class="carousel-inner"
			style="
				height: 900px;
				max-height: 900px;
				background: linear-gradient(rgba(9, 30, 62, 0.7), rgba(9, 30, 62, 0.7)),
					url('/img/carousel-1.jpg') center center no-repeat;
				background-size: cover;
				padding-top: 100px;
				margin-bottom: 100px;
			">
			<div
				class="w-100 p-2 d-flex gap-2 justify-content-center text-white align-items-center">
				<div class="col-md-5" style="min-height: 50%; padding-top: 15%;">
					<h1
						class="display-1 text-white text-center mb-md-4 animated"
						id="text-animate"
						style="font-size: 8vh;"></h1>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	@media screen and (max-width: 720px) {
		#header-carousel {
			height: 600px;
		}
		.img-logo {
			width: 20% !important;
			height: 20% !important;
			object-fit: cover;
		}
		.carousel-inner,
		.carousel-item {
			height: 100% !important;
		}
	}
</style>
