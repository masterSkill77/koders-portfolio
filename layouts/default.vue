<template>
	<Teleport to="body">
		<div id="circularcursor"></div>
		<AppSpinner />
		<AppTopbar />
		<div class="container-fluid position-relative p-0">
			<AppMenu />
			<AppCarousel />
		</div>

		<slot />
		<AppFooter />
		<CommonsBackTop />
	</Teleport>
</template>
