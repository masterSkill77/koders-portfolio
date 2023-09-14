<script setup>
	const currentRoute = useRouter().currentRoute;
</script>
<template>
	<nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
		<NuxtLink to="/" class="navbar-brand p-0">
			<img
				src="/logo.png"
				width="70"
				height="70"
				class="d-inline-block align-top"
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
				<NuxtLink to="/" class="nav-item nav-link active">Home</NuxtLink>
				<NuxtLink to="/about" class="nav-item nav-link">About</NuxtLink>
				<a href="service.html" class="nav-item nav-link">Services</a>
				<div class="nav-item dropdown">
					<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
						>Blog</a
					>
					<div class="dropdown-menu m-0">
						<a href="blog.html" class="dropdown-item">Blog Grid</a>
						<a href="detail.html" class="dropdown-item">Blog Detail</a>
					</div>
				</div>
				<a href="contact.html" class="nav-item nav-link">Contact</a>
			</div>
		</div>
	</nav>
</template>
