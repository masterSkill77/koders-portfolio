<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	import { useLoading } from '~/stores/useLoading';
	gsap.registerPlugin(ScrollTrigger);
	const currentFilter = ref('tous');
	useLoading().setLoading(true);
	const workCategories = await useFetchData('/work-categories');
	const works = ref(await useFetchData('/portfolio'));
	useLoading().setLoading(false);

	const changeFilter = async (filter) => {
		currentFilter.value = filter;
		works.value = await useFetchData('/portfolio');

		if (filter == 'tous') {
			return;
		}

		works.value = works.value.filter((work) => {
			const workCategory = work.categories.map((category) => category.slug);
			return workCategory.includes(filter);
		});
	};
</script>
<template>
	<div class="container">
		<div class="mb-5 wow slideInUp">
			<div
				class="text-center section-title section-title-sm position-relative pb-3 mb-4">
				<h3 class="mb-0">Nos réalisations</h3>
			</div>
			<div class="d-flex flex-wrap m-1 justify-content-center">
				<a
					href=""
					@click.prevent="changeFilter('tous')"
					:class="`btn btn-light m-1 ${
						'tous' == currentFilter ? 'active' : ''
					}`"
					>Tous</a
				>
				<a
					v-for="category in workCategories"
					:key="category.term_id"
					href=""
					@click.prevent="changeFilter(category.slug)"
					:class="`btn btn-light m-1 ${
						category.slug == currentFilter ? 'active' : ''
					}`"
					>{{ category.name }}</a
				>
			</div>
		</div>

		<div class="py-5">
			<div class="col-lg-8">
				<div class="row g-5">
					<CommonsWorksCard v-for="work in works" :key="work.id" :work="work" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.active {
		background-color: rgb(35, 35, 96);
		color: white;
	}
</style>
