<script setup>
	const { title, description } = defineProps({
		title: { type: String, required: false },
		description: { type: String, required: false },
	});
</script>
<template>
	<div
		class="col-lg-4 wow slideInUp"
		data-wow-delay="0.6s"
		style="
			visibility: visible;
			animation-delay: 0.6s;
			animation-name: slideInUp;
		">
		<div class="bg-light rounded">
			<div class="border-bottom py-4 px-5 mb-4">
				<CommonsTitle tag="h4" :text="title" class="text-primary mb-1" />
				<CommonsText tag="small" class="text-uppercase" :text="description" />
			</div>
			<div class="p-5 pt-0">
				<h1 class="display-5 mb-3">
					<small class="align-top" style="font-size: 22px; line-height: 45px"
						>$</small
					>49.00<small
						class="align-bottom"
						style="font-size: 16px; line-height: 40px"
						>/ Month</small
					>
				</h1>
				<div class="d-flex justify-content-between mb-3">
					<span>HTML5 &amp; CSS3</span
					><i class="fa fa-check text-primary pt-1"></i>
				</div>
				<div class="d-flex justify-content-between mb-3">
					<span>Bootstrap v5</span><i class="fa fa-check text-primary pt-1"></i>
				</div>
				<div class="d-flex justify-content-between mb-3">
					<span>Responsive Layout</span
					><i class="fa fa-times text-danger pt-1"></i>
				</div>
				<div class="d-flex justify-content-between mb-2">
					<span>Cross-browser Support</span
					><i class="fa fa-times text-danger pt-1"></i>
				</div>
				<a href="" class="btn btn-primary py-2 px-4 mt-4">Order Now</a>
			</div>
		</div>
	</div>
</template>
