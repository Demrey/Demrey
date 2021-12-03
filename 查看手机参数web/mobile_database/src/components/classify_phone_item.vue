<template>
	<div class="item">
		<img class="item-img" :src="address"/>
		<div class="text">{{ text }}</div>
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			required: true
		},
		address: {
			type: String,
			required: true
		}
	},
	methods: {

	}
}
</script>

<style>
	.item {
		margin-bottom: 40px;
	}
	
	.item-img {
		width: 100px;
		height: 120px;
	}
	
	.text {
		width: 150px;
	}
</style>
