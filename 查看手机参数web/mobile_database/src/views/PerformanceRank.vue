<template>
	<div>
		<div>
			<h2>性能排行</h2>
			<van-tabs v-model="active">
				<van-tab title="20款应用两轮打开时间(s)">
					<div v-for="(obj, index) in rankTimeData" :key="index">
						<rankItem :order="index+1" :phoneName="obj.name" :pivotDisplay="String(obj.time)" :percent="(obj.time) / 2" />
					</div>
				</van-tab>
				<van-tab title="原神最高画质帧率(fps)">
					<div v-for="(obj, index) in rankFpsData" :key="index">
						<rankItem :order="index+1" :phoneName="obj.name" :pivotDisplay="String(obj.fps)" :percent="(obj.fps)" />
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
			performanceData: [],
			rankTimeData: [],
			rankFpsData: []
		}
	},
	components: {
		rankItem
	},
	created() {
		//定义数据属性
		var performanceObj = {
			name: '',
			time: '',
			fps: ''
		}
		
		//遍历store.state中所需要的数据到performanceData
		for (var i = 0; i < 32; i++) {
			var performanceObj_2 = JSON.parse(JSON.stringify(performanceObj))
			performanceObj_2.name = this.$store.state[i][0]
			performanceObj_2.time = this.$store.state[i][8]
			performanceObj_2.fps = this.$store.state[i][9]
			this.performanceData.push(performanceObj_2)
		}
		
		// 排序算法函数
		function compare(propName) {
			return function(obj1, obj2) {
				var a = obj1[propName];
				var b = obj2[propName];
				return a - b; //升序
			}
		}
		
		//按20轮应用两轮打开时间，从小到大排序
		this.rankTimeData = JSON.parse(JSON.stringify(this.performanceData))
		this.rankTimeData.sort(compare("time"))
		
		//按原神最高画质帧率，从小到大排序
		this.rankFpsData = JSON.parse(JSON.stringify(this.performanceData))
		this.rankFpsData.sort(compare("fps"))
	}
}
</script>

<style>
</style>
