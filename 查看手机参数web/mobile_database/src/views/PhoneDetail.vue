<template>
	<div>
		<h1>
			{{ $store.state[this.phoneID][0] }}
		</h1>
		<van-image :src="$store.state[this.phoneID][11]" style="height: 150px;" />
		<van-tabs v-model="active" scrollspy sticky>
			<van-tab v-for="(subject, index) in titleInfo" :title="subject[2]" :key="index">
				<detailItem class="detail-item" :machineId="phoneID" :header="subject[2]" :iconName="subject[3]" :start="subject[0]" :end="subject[1]"/>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import { store } from '../store'
import detailItem from '../components/detailItem.vue'
export default {
	name: 'PhoneDetail',
	components: {
		detailItem
	},
	data () {
		return {
			phoneID: this.$route.params.ID,
			active: 0,
			titleInfo: [
				[0, 6, '基本信息', 'orders-o'], [6, 8, '电池续航', 'logistics'],
				[8, 10, '游戏性能', 'fire-o'], [10, 11, '跑分', 'points']
			]
		}
	},
	methods: {
	},
	created() {
	}
}
</script>

<style>
	.detail-item {
		font-size: 18px;
		border: 1px gray solid;
		border-radius: 10px;
		margin-bottom: 100px;
	}
</style>
