<template>
	<div>
		<div style="height: 300px;">
			<van-swipe :autoplay="3000" @change="onChange">
				<van-swipe-item v-for="(item, index) in swiperData" :key="index">
					<router-link :to="{ name: 'PhoneDetail', params: { ID: Object.keys(item)} }">
						<img v-lazy="String(Object.values(item))" />
					</router-link>
				</van-swipe-item>
			</van-swipe>
		</div>

		<van-grid :border="true" :column-num="3">
			<van-grid-item text="机型对比" :to="{ name: 'Compare' }">
				<div slot="icon">
					<img src="../assets/compare.svg" />
				</div>
			</van-grid-item>
			<van-grid-item text="性能排行" :to="{ name: 'PerformanceRank' }">
				<div slot="icon">
					<img src="../assets/performance.svg" />
				</div>
			</van-grid-item>
			<van-grid-item text="电池续航排行" :to="{ name: 'EnduranceRank' }">
				<div slot="icon">
					<img src="../assets/battery.svg" />
				</div>
			</van-grid-item>
			<van-grid-item text="跑分排行" :to="{ name: 'PointsRank' }">
				<div slot="icon">
					<img src="../assets/fraction.svg" />
				</div>
			</van-grid-item>
			<van-grid-item text="游戏帧率排行" :to="{ name: 'GameFpsRank' }">
				<div slot="icon">
					<img src="../assets/fps.svg" />
				</div>
			</van-grid-item>
			<van-grid-item text="基础信息排行" :to="{ name: 'BaseInfoRank' }">
				<div slot="icon">
					<img src="../assets/baseInformation.svg" />
				</div>
			</van-grid-item>

		</van-grid>

		<div class="look">
			<van-icon name="eye-o" />
			<div>大家在看</div>
		</div>
		<div v-for="(seeId, index) in seeIdList" :key="index">
			<phoneItem :text=$store.state[seeId][0] :address=$store.state[seeId][11] :phoneId=seeId />
		</div>
		
	</div>
</template>

<script>
import phoneItem from '../components/phoneItem.vue'
import { store } from '../store'
export default {
	name: 'Home',
	components: {
		phoneItem
	},
	data() {
		return {
			current: 0,
			seeIdList: [26, 31, 20, 25],
			swiperData: [
				{15: 'https://gitee.com/Demrey/pictures/raw/master/iPhone13_Pro.jpg'},
				{0: 'https://gitee.com/Demrey/pictures/raw/master/P50_Pro.jpg'},
				{10: 'https://gitee.com/Demrey/pictures/raw/master/Redmi_Note11_Pro.jpg'},
				{5: 'https://gitee.com/Demrey/pictures/raw/master/Xiaomi_Mix4.jpg'}
			]
		}
	},
	methods: {
		onChange(index) {
			this.current = index
		}
	}
}
</script>

<style>
	.look {
		display: flex;
		align-items: center
	}
</style>
