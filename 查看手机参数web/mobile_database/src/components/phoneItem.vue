<template>
	<router-link :to="{ name: 'PhoneDetail', params: { ID: phoneId } }">
		<div class="box">
			<img class="image" :src="address"/>
			<div class="title">{{ text }}</div>
		</div>
	</router-link>
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
		},
		phoneId: {
			required: true
		}
	}
}
</script>

<style>
	.box {
		position: relative;
		margin-bottom: 10px;
	}
	.image {
		display: flex;
		height: 100px;
		width: 100px;
		align-items: flex-start;
		margin-left: 30px;
	}
	.title {
		display: inline;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-20%, -50%);
		font-weight: bold;
	}
</style>
