<script setup>
	import { ref, onMounted } from 'vue';
	import { gsap } from 'gsap';

	const animateLogo = (scale, rotate, bdRadius, x) => {
		if (process.client) {
			gsap.to('.logo-img', {
				scale,
				duration: 1,
				rotate,
				borderRadius: bdRadius,
				x,
			});
		}
	};
	// declare a ref to hold the element reference
	// the name must match template ref value
	const logo = ref(null);
	const currentRoute = useRouter().currentRoute;
	const animate = () => {
		animateLogo(0.8, 360, '50px', 100);
	};
	const reset = () => {
		animateLogo(1, 0, '0px', 0);
	};
</script>
<template>
	<nav
		class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0"
		@mouseover="animate"
		@mouseleave="reset">
		<NuxtLink to="/" class="navbar-brand p-0">
			<img
				ref="logo"
				src="/logo.png"
				width="70"
				height="70"
				class="d-inline-block align-top logo-img"
				alt="" />
		</NuxtLink>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarCollapse">
			<span class="fa fa-bars"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarCollapse">
			<div class="navbar-nav ms-auto py-0">
				<NuxtLink to="/" class="nav-item nav-link">Accueil</NuxtLink>
				<NuxtLink to="/" class="nav-item nav-link">A Propos</NuxtLink>
				<NuxtLink to="/services" class="nav-item nav-link">Services</NuxtLink>
				<NuxtLink to="/teams" class="nav-item nav-link">Équipe</NuxtLink>
				<NuxtLink to="/portfolio" class="nav-item nav-link">Portfolio</NuxtLink>
				<NuxtLink to="/contact" class="nav-item nav-link">Contact</NuxtLink>
			</div>
		</div>
	</nav>
</template>
