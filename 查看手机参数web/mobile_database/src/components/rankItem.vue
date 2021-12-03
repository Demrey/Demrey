<template>
	<div>
		<div class="order-phoneName">
			<span>{{ order }}</span>
			<span class="phone-name">{{ phoneName }}</span>
		</div>
		<div class="progress">
			<van-progress :pivot-text = "pivotDisplay" color="#42B983" :percentage="percent" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		order: {
			
		},
		phoneName: {
			type: String
		},
		pivotDisplay: {
			type: String
		},
		percent: {
			
		}
	}
}
</script>

<style>
	.order-phoneName {
		margin-top: 10px;
		margin-left: 10px;
		text-align: left
	}
	
	.phone-name {
		margin-left: 30px;
	}
	
	.progress {
		margin-top: 7px;
		margin-bottom: 40px;
	}
</style>
