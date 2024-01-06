<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	onMounted(() => {
		if (process.client) {
			gsap.registerPlugin(ScrollTrigger);

			gsap.from('#image_ceo', {
				ease: 'fade',
				scrollTrigger: {
					trigger: '#image_ceo',
					toggleActions: 'restart reverse restart resume',
				},
				yoyo: true,
				opacity: 0,
				duration: 1,
				x: 100,
			});
		}
	});
</script>
<template>
	<div class="container-fluid py-5">
		<div class="container py-5">
			<div class="row g-5">
				<div class="col-lg-7">
					<div class="section-title position-relative pb-3 mb-5">
						<CommonsTitle tag="h1" text="Un petit mot de notre CEO" />
					</div>
					<div
						class="p-4 d-flex flex-wrap justify-content-between align-content-start"
						style="background-color: rgb(78 184 223 / 26%)">
						<img src="/img/guillemet.png" style="width: 50px; height: 50px" />
						<CommonsText
							tag="h3"
							class="mb-4"
							style="
								width: 88%;
								font-weight: 100 !important;
								font-size: 20px;
								color: rgb(32, 28, 28);
								text-align: justify;
							"
							text="Chez Koders,
						nous sommes animés par la conviction que chaque ligne de code que
						nous écrivons contribue à façonner le futur numérique. Aujourd'hui,
						je tiens à exprimer ma profonde gratitude envers notre équipe
						exceptionnelle. Vos compétences, votre créativité et votre passion
						sont les piliers de notre réussite collective. Ensemble, nous avons
						créé une culture qui célèbre la diversité des idées et la recherche
						constante de l'excellence." />
					</div>
				</div>
				<div class="col-lg-5" style="height: 500px">
					<div class="position-relative h-100">
						<img
							class="w-100 h-100 rounded"
							id="image_ceo"
							style="object-fit: cover"
							src="/img/Oskar.jpg" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
