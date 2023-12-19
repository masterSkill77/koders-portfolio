<script setup>
	const { work } = defineProps({
		work: {
			required: true,
		},
	});
</script>
<template>
	<div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
		<div class="blog-item bg-light rounded overflow-hidden">
			<div class="blog-img position-relative overflow-hidden">
				<img class="img-fluid" :src="work.photo" alt="" />
			</div>
			<div class="p-4">
				<div class="d-flex mb-3 flex-wrap gap-2">
					<small
						class="me-3 btn btn-sm btn-primary"
						v-for="category in work.categories"
						:key="category.term_id"
						><i class="far fa-user text-primary me-2"></i>
						{{ category.name }}</small
					>
				</div>
				<h4 class="mb-3">{{ work.title }}</h4>
				<h6 class="mb-3"></h6>
				<p>
					{{ work.content }}
				</p>
				<a class="text-uppercase" href=""
					>Read More <i class="bi bi-arrow-right"></i
				></a>
			</div>
		</div>
	</div>
</template>
