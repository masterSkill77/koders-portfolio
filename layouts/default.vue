<template>
	<Teleport to="body">
		<AppSpinner />
		<AppTopbar />
		<div class="container-fluid position-relative p-0">
			<AppMenu />
			<AppCarousel />
		</div>

		<slot />
		<AppFooter />
	</Teleport>
</template>
