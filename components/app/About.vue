<template>
	<div
		class="container-fluid py-5 wow fadeInUp"
		data-wow-delay="0.1s"
		style="
			visibility: visible;
			animation-delay: 0.1s;
			animation-name: fadeInUp;
		">
		<div class="container py-5">
			<div class="row g-5">
				<div class="col-lg-5" style="min-height: 500px">
					<div class="position-relative h-100">
						<img
							class="w-100 h-100 rounded"
							id="image_demo"
							style="object-fit: cover"
							src="/img/about.jpg" />
					</div>
				</div>
				<div class="col-lg-7">
					<div class="section-title position-relative pb-3 mb-5">
						<CommonsTitle
							tag="h3"
							class="fw-bold text-primary text-uppercase"
							text="Qui sommes nous ?" />
						<CommonsTitle
							tag="h1"
							text="Nous sommes une ESN basée à Madagascar" />
					</div>
					<CommonsText
						tag="p"
						class="mb-4"
						text="Koders est une jeune startup qui fait son petit bout de chemin dans le monde de l'IT. Composé de 6 ingénieurs en informatique, sortie de la plus grande école du pays, nous avons décider de bâtir ensemble pour l'avenir, et d'offrir notre expertise au service du quotidien." />
					<div class="row g-0 mb-3">
						<div
							class="col-sm-6 wow zoomIn"
							data-wow-delay="0.2s"
							style="
								visibility: visible;
								animation-delay: 0.2s;
								animation-name: zoomIn;
							">
							<CommonsTitle
								class="mb-3"
								tag="h5"
								text="Disponible de suite"
								icon="check"
								icon-color="primary"
								icon-position="start" />

							<CommonsTitle
								class="mb-3"
								tag="h5"
								text="Une équipe polyvalente"
								icon="check"
								icon-color="primary"
								icon-position="start" />
						</div>
						<div
							class="col-sm-6 wow zoomIn"
							data-wow-delay="0.4s"
							style="
								visibility: visible;
								animation-delay: 0.4s;
								animation-name: zoomIn;
							">
							<CommonsTitle
								class="mb-3"
								tag="h5"
								text="Support à tout moment"
								icon="check"
								icon-color="primary"
								icon-position="start" />

							<CommonsTitle
								class="mb-3"
								tag="h5"
								text="Tarification abordable"
								icon="check"
								icon-color="primary"
								icon-position="start" />
						</div>
					</div>
					<div
						class="d-flex align-items-center mb-4 wow fadeIn"
						data-wow-delay="0.6s">
						<div
							id="phone-container"
							class="d-flex align-items-center justify-content-center rounded"
							style="width: 60px; height: 60px; border-radius: 30px !important">
							<i id="phone_number" class="fa fa-phone-alt text-white"></i>
						</div>
						<div class="ps-4">
							<CommonsTitle
								tag="h4"
								class="mb-2"
								text="Un coup de fil et on est là pour vous"></CommonsTitle>
							<CommonsTitle
								tag="h5"
								class="text-primary mb-0"
								text="+261 34 68 047 17"></CommonsTitle>
						</div>
					</div>
					<a
						href="/"
						class="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
						data-wow-delay="0.9s"
						id="request_quote"
						style="
							visibility: hidden;
							animation-delay: 0.9s;
							animation-name: none;
						"
						>Demande un Devis</a
					>
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

		gsap.from('#image_demo', {
			ease: 'fade',
			scrollTrigger: {
				trigger: '#image_demo',
				toggleActions: 'restart reverse restart resume',
			},
			yoyo: true,
			opacity: 0,
			duration: 1,
			x: -100,
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
</script>
