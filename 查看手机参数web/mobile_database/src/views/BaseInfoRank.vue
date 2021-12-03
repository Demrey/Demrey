<template>
	<div>
		<div>
			<h2>基础信息排行</h2>
			<van-tabs v-model="active">
				<van-tab title="屏幕尺寸(英寸)">
					<div v-for="(obj, index) in screenData" :key="index">
						<rankItem :order="index+1" :phoneName="obj.name" :pivotDisplay="String(obj.screen)" :percent="(obj.screen) * 10" />
					</div>
				</van-tab>
				<van-tab title="机身重量(克)">
					<div v-for="(obj, index) in weightData" :key="index">
						<rankItem :order="index+1" :phoneName="obj.name" :pivotDisplay="String(obj.weight)" :percent="(obj.weight) / 4" />
					</div>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
import { store } from '../store'
import rankItem from '../components/rankItem.vue'
export default {
	data() {
		return {
			active: 0,
			baseInfoData: [],
			screenData: [],
			weightData: []
		}
	},
	components: {
		rankItem
	},
	created() {
		//定义数据属性
		var baseInfoObj = {
			name: '',
			screen: '',
			weight: ''
		}
		
		//遍历store.state中所需要的数据到baseInfoData
		for (var i = 0; i < 32; i++) {
			var baseInfoObj_2 = JSON.parse(JSON.stringify(baseInfoObj))
			baseInfoObj_2.name = this.$store.state[i][0]
			baseInfoObj_2.screen = this.$store.state[i][4]
			baseInfoObj_2.weight = this.$store.state[i][5]
			this.baseInfoData.push(baseInfoObj_2)
		}
		
		// 排序算法函数
		function compare(propName) {
			return function(obj1, obj2) {
				var a = obj1[propName];
				var b = obj2[propName];
				return a - b; //升序
			}
		}
		
		//按屏幕尺寸，从小到大排序
		this.screenData = JSON.parse(JSON.stringify(this.baseInfoData))
		this.screenData.sort(compare("screen"))
		
		//按机身重量，从小到大排序
		this.weightData = JSON.parse(JSON.stringify(this.baseInfoData))
		this.weightData.sort(compare("weight"))
	}
}
</script>

<style>
</style>
