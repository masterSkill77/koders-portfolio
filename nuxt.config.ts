// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	alias: {
		'@': '/components',
	},
	app: {
		head: {
			title: 'Team Koders',
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{
					href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap',
					rel: 'stylesheet',
				},

				{
					href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css',
					rel: 'stylesheet',
				},
				{
					href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css',
					rel: 'stylesheet',
				},

				{
					href: 'lib/owlcarousel/assets/owl.carousel.min.css',
					rel: 'stylesheet',
				},
				{ href: 'lib/animate/animate.min.css', rel: 'stylesheet' },

				{ href: 'css/bootstrap.min.css', rel: 'stylesheet' },

				{ href: 'css/style.css', rel: 'stylesheet' },
			],
			script: [
				{ src: 'https://code.jquery.com/jquery-3.4.1.min.js' },
				{
					src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
				},
				{ src: 'lib/wow/wow.min.js' },
				{ src: 'lib/easing/easing.min.js' },
				{ src: 'lib/waypoints/waypoints.min.js' },
				{ src: 'lib/counterup/counterup.min.js' },
				{ src: 'lib/owlcarousel/owl.carousel.min.js' },
				{ src: 'js/main.js' },
			],
		},
	},
});
