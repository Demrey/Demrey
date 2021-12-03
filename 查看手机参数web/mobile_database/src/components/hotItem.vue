<template>
	<div class="item-container">
		<router-link :to="{ name: 'PhoneDetail', params: { ID: phoneId } }">
			<div class="item-content">
				<span class="rank">{{ rank }}</span>
				<span class="name">{{ $store.state[phoneId][0] }}</span>
				<span class="numbersIcon">
					<van-icon name="fire-o"></van-icon>
					{{ numbers }}
				</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import { store } from '../store'

export default {
	props: {
		rank: {
			required: true
		},
		numbers: {
			required: true
		},
		phoneId: {
			required: true
		}
	}
}
</script>

<style>
	.item-container {
		height: 30px;
		margin-top: 20px;
		margin-bottom: 20px;
		position: relative;
	}
	
	.item-content {
		display: flex;
		height: 20px;
		position: absolute;
		align-items: baseline;
		margin: auto;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	
	.rank {
		margin-left: 10px;
	}
	
	.name {
		margin-left: 20px;
	}
	
	.numbersIcon {
		flex: 1;
		margin-right: 20px;
		text-align: right;
	}
</style>
