<template>
	<div class="detail-info">
		<van-row>
			<van-col span="12">{{ title }}</van-col>
			<van-col span="12">{{ content }}</van-col>
		</van-row>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		content: {
			required: true
		}
	}
}
</script>

<style>
	.detail-info {
		margin-top: 30px;
		margin-bottom: 50px;
	}
</style>
