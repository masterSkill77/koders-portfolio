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
					<div class="p-4" style="background-color: rgb(78 184 223 / 26%)">
						<CommonsText
							tag="h3"
							class="mb-4"
							style="font-style: italic; color: black"
							text="Koders est une jeune startup qui fait son petit bout de chemin dans le monde de l'IT. Composé de 6 ingénieurs en informatique, sortie de la plus grande école du pays, nous avons décider de bâtir ensemble pour l'avenir, et d'offrir notre expertise au service du quotidien." />
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
