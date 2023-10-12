<template>
	<Teleport to="body">
		<div id="circularcursor"></div>
		<LazyAppSpinner />
		<LazyAppTopbar />
		<div class="container-fluid position-relative p-0">
			<LazyAppMenu />
			<LazyAppCarousel />
		</div>

		<slot />
		<LazyAppFooter />
		<LazyCommonsBackTop />
	</Teleport>
</template>
