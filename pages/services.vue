<script setup>
	import { useLoading } from 'stores/useLoading';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	gsap.registerPlugin(ScrollTrigger);
	useLoading().setLoading(true);
	setTimeout(() => {
		useLoading().setLoading(false);
	}, 1000);

	onMounted(() => {
		if (process.client) {
			gsap.from('.container-services', {
				ease: 'fade',
				scrollTrigger: {
					trigger: '.container-services',
					toggleActions: 'restart pause resume reset',
				},
				yoyo: true,
				opacity: 0,
				duration: 1,
				x: -200,
			});
		}
	});
</script>

<template>
	<div class="container-fluid py-5 container-services">
		<div class="container py-5">
			<div
				class="section-title text-center position-relative pb-3 mb-5 mx-auto"
				style="max-width: 600px">
				<h5 class="fw-bold text-primary text-uppercase">
					Pourquoi nous choisir ?
				</h5>
				<h1 class="mb-0">
					Nous sommes là pour vous aider à atteindre votre objectif
				</h1>
			</div>
			<div class="row g-5">
				<div class="col-lg-4">
					<div class="row g-5">
						<div class="col-12">
							<div
								class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
								style="width: 60px; height: 60px">
								<i class="fa fa-users text-white"></i>
							</div>
							<h4>Une équipe dédiée</h4>
							<p class="mb-0">
								L'équipe sera entièrement à votre disposition et est prête à
								vous mettre au centre de l'attention
							</p>
						</div>
						<div class="col-12">
							<div
								class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
								style="width: 60px; height: 60px">
								<i class="fa fa-award text-white"></i>
							</div>
							<h4>La complicité</h4>
							<p class="mb-0">
								Étant des collaborateurs de log date, tout le monde se connait
								parfaitement, une complicité qui est bénéfique au niveau du
								développement.
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4" style="min-height: 350px">
					<div class="position-relative h-100">
						<img
							class="position-absolute w-100 h-100 rounded"
							src="/img/team.png"
							style="object-fit: cover" />
					</div>
				</div>
				<div class="col-lg-4">
					<div class="row g-5">
						<div class="col-12">
							<div
								class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
								style="width: 60px; height: 60px">
								<i class="fa fa-users-cog text-white"></i>
							</div>
							<h4>Des professionnels</h4>
							<p class="mb-0">
								Nous sommes des professionnels, et nous nous engageons à
								respecter les contraintes et spécifications posées et disctutées
								ensemble.
							</p>
						</div>
						<div class="col-12">
							<div
								class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
								style="width: 60px; height: 60px">
								<i class="fa fa-phone-alt text-white"></i>
							</div>
							<h4>Support</h4>
							<p class="mb-0">
								On est là en cas de besoin urgent à traiter, ou des missions
								vraiment urgent.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
