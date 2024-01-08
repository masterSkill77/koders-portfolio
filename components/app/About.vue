<template>
	<div class="container-fluid py-5" style="padding-bottom: 0 !important">
		<div class="container py-5">
			<div class="row g-5">
				<div class="col-lg-7">
					<div class="section-title position-relative pb-3 mb-5">
						<CommonsTitle
							tag="h3"
							class="fw-bold text-primary text-uppercase"
							text="KODERS, une équipe, une fraternité" />
						<CommonsTitle
							tag="h1"
							text="Avant d'être collaborateur, on est avant tout un groupe d'ami" />
					</div>
					<CommonsText
						tag="p"
						class="mb-4 text-justify"
						text="Notre équipe chez Koders a tracé un parcours extraordinaire depuis nos débuts modestes jusqu'à devenir une force dynamique dans le monde de la technologie. C'est en rassemblant des esprits innovants et passionnés que nous avons jeté les bases de ce qui allait devenir une communauté unie et créative. Depuis nos premières lignes de code jusqu'aux projets les plus ambitieux, chaque membre de notre équipe a joué un rôle essentiel dans notre progression." />
					<CommonsText
						tag="p"
						class="mb-4 text-justify"
						text="Au fil des ans, nous avons surmonté des défis, exploité des opportunités et évolué ensemble. Notre histoire est tissée de moments forts, de réussites collectives et d'apprentissages qui ont façonné notre culture d'entreprise. En regardant en arrière, nous constatons avec fierté les projets innovants que nous avons réalisés et les défis que nous avons relevés avec détermination." />
				</div>

				<div class="col-lg-5" style="min-height: 500px">
					<div class="position-relative h-100">
						<img
							class="w-100 h-100 rounded"
							id="image_demo"
							style="object-fit: cover"
							src="/img/about.jpg" />
					</div>
				</div>
			</div>

			<div class="pt-4">
				<div class="pt-4 section-title position-relative pb-3 mb-5">
					<CommonsTitle tag="h1" text="Notre histoire" />
					<CommonsText
						tag="p"
						class="mb-4 text-justify"
						text="Notre équipe n'est pas seulement un groupe de collègues, mais une famille de talents diversifiés qui partagent une passion commune pour l'excellence technologique. Chacun d'entre nous apporte des compétences uniques et une énergie créative qui alimentent notre croissance continue. En tant que Koders, nous avons évolué ensemble et continuerons à le faire, façonnant ainsi l'avenir de la technologie avec audace et détermination." />
				</div>
				<a
					href="/contact"
					class="btn btn-primary py-3 px-5 mt-3"
					id="request_quote"
					>Demander devis</a
				>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	onMounted(() => {
		if (process.client) {
			gsap.registerPlugin(ScrollTrigger);

			gsap.from('#image_demo', {
				ease: 'fade',
				scrollTrigger: {
					trigger: '#image_demo',
					toggleActions: 'restart reverse restart resume',
				},
				yoyo: true,
				opacity: 0,
				duration: 1,
				x: 200,
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
			gsap.to('#phone-container', {
				ease: 'fade',
				scrollTrigger: {
					trigger: '#phone-container',
					toggleActions: 'restart reverse reverse resume',
					scrub: true,
				},
				backgroundColor: '#142023',
				opacity: 1,
				duration: 1,
			});
		}
	});
</script>
