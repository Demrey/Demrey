<template>
	<div>
		<div>
			<h2>电池续航排行</h2>
			<van-tabs v-model="active">
				<van-tab title="三小时续航测试剩余电量(%)">
					<div v-for="(obj, index) in remainBatteryData" :key="index">
						<rankItem :order="index+1" :phoneName="obj.name" :pivotDisplay="String(obj.remain)" :percent="(obj.remain)" />
					</div>
				</van-tab>
				<van-tab title="电池容量(mAh)">
					<div v-for="(obj, index) in batteryCapacityData" :key="index">
						<rankItem :order="index+1" :phoneName="obj.name" :pivotDisplay="String(obj.capacity)" :percent="(obj.capacity) / 100" />
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
			enduranceData: [],
			remainBatteryData: [],
			batteryCapacityData: []
		}
	},
	components: {
		rankItem
	},
	created() {
		//定义数据属性
		var enduranceObj = {
			name: '',
			remain: '',
			capacity: ''
		}
		
		//遍历store.state中所需要的数据到enduranceData
		for (var i = 0; i < 32; i++) {
			var enduranceObj_2 = JSON.parse(JSON.stringify(enduranceObj))
			enduranceObj_2.name = this.$store.state[i][0]
			enduranceObj_2.remain = this.$store.state[i][7]
			enduranceObj_2.capacity = this.$store.state[i][6]
			this.enduranceData.push(enduranceObj_2)
		}
		
		// 排序算法函数
		function compare(propName) {
			return function(obj1, obj2) {
				var a = obj1[propName];
				var b = obj2[propName];
				return a - b; //升序
			}
		}
		
		//按三小时续航剩余电量，从小到大排序
		this.remainBatteryData = JSON.parse(JSON.stringify(this.enduranceData))
		this.remainBatteryData.sort(compare("remain"))
		
		//按电池容量，从小到大排序
		this.batteryCapacityData = JSON.parse(JSON.stringify(this.enduranceData))
		this.batteryCapacityData.sort(compare("capacity"))
	}
}
</script>

<style>
</style>
