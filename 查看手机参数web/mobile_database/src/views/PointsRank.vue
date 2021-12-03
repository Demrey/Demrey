<template>
	<div>
		<div>
			<h2>GeekBench5 跑分排行</h2>
			<div v-for="(obj, index) in pointsData" :key="index">
				<rankItem :order="index+1" :phoneName="obj.name" :pivotDisplay="String(obj.point)" :percent="(obj.point) / 100" />
			</div>
		</div>
	</div>
</template>

<script>
import { store } from '../store'
import rankItem from '../components/rankItem.vue'
export default {
	data() {
		return {
			pointsData: []
		}
	},
	components: {
		rankItem
	},
	created() {
		//定义数据属性
		var pointsObj = {
			name: '',
			point: ''
		}
		
		//遍历store.state中所需要的数据到pointsData
		for (var i = 0; i < 32; i++) {
			var pointsObj_2 = JSON.parse(JSON.stringify(pointsObj))
			pointsObj_2.name = this.$store.state[i][0]
			pointsObj_2.point = this.$store.state[i][10]
			this.pointsData.push(pointsObj_2)
		}
		
		// 排序算法函数
		function compare(propName) {
			return function(obj1, obj2) {
				var a = obj1[propName];
				var b = obj2[propName];
				return a - b; //升序
			}
		}
		
		//按GeekBench 5跑分，从小到大排序
		this.pointsData = JSON.parse(JSON.stringify(this.pointsData))
		this.pointsData.sort(compare("point"))
	}
}
</script>

<style>
</style>
