<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	gsap.registerPlugin(ScrollTrigger);
	onMounted(() => {
		if (process.client) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '#service-container',
					toggleActions: 'restart pause resume reset',
				},
			});
			tl.from('#service-container', {
				ease: 'fade',
				duration: 1,
				y: -200,
				opacity: 0,
			});

			tl.from('.zoomIn', {
				duration: 1,
				scale: 0.5,
			});
		}
	});
</script>
<template>
	<div class="container-fluid">
		<div class="container py-5" id="service-container">
			<div
				class="section-title text-center position-relative pb-3 mb-5 mx-auto"
				style="max-width: 600px">
				<CommonsTitle
					class="fw-bold text-primary text-uppercase"
					text="Nos Services"
					tag="h5" />
				<CommonsTitle tag="h1" text="Prêt à vous lancer avec nous ?" />
			</div>
			<div class="row g-5">
				<div class="col-lg-4 col-md-6 zoomIn">
					<div
						class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
						<div class="service-icon">
							<i class="fa fa-shield-alt text-white"></i>
						</div>
						<CommonsTitle
							tag="h4"
							text="Conception des solutions IT"
							class="mb-3" />
						<CommonsText
							tag="p"
							text="Que vous soyez en train de tout mettre en place votre nouvelle SI, on est là pour vous." />
						<a class="btn btn-lg btn-primary rounded" href="">
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 zoomIn">
					<div
						class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
						<div class="service-icon">
							<i class="fa fa-shield-alt text-white"></i>
						</div>
						<CommonsTitle tag="h4" text="Développement web" class="mb-3" />
						<CommonsText
							tag="p"
							text="Nous avons l'équipe qui vous permettra de démarrer votre bisuness." />
						<a class="btn btn-lg btn-primary rounded" href="">
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 zoomIn">
					<div
						class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
						<div class="service-icon">
							<i class="fa fa-shield-alt text-white"></i>
						</div>
						<CommonsTitle tag="h4" text="Création de maquette" class="mb-3" />
						<CommonsText
							tag="p"
							text="Nos designers sont les meilleurs, et ils sont à votre disposition." />
						<a class="btn btn-lg btn-primary rounded" href="">
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 zoomIn">
					<div
						class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
						<div class="service-icon">
							<i class="fa fa-shield-alt text-white"></i>
						</div>
						<CommonsTitle tag="h4" text="Développement mobile" class="mb-3" />
						<CommonsText
							tag="p"
							text="Les applications mobiles n'ont aucun secret pour nous, et on est prêt à rélever les defis que vous proposez." />
						<a class="btn btn-lg btn-primary rounded" href="">
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 zoomIn">
					<div
						class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
						<div class="service-icon">
							<i class="fa fa-shield-alt text-white"></i>
						</div>
						<CommonsTitle tag="h4" text="Mise en place des CMS" class="mb-3" />
						<CommonsText
							tag="p"
							text="Vous êtes plutôt sur du CMS, on peut vous mettre ça en place en 2 temps 3 mouvements." />
						<a class="btn btn-lg btn-primary rounded" href="">
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 zoomIn">
					<div
						class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
						<div class="service-icon">
							<i class="fa fa-shield-alt text-white"></i>
						</div>
						<CommonsTitle
							tag="h4"
							text="Développement des solutions e-commerce"
							class="mb-3" />
						<CommonsText
							tag="p"
							text="Vos boutiques en ligne vont gagner en boost une fois que vous travaillerez avec nous." />
						<a class="btn btn-lg btn-primary rounded" href="">
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
