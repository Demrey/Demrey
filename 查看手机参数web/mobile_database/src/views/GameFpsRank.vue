<template>
	<div>
		<div>
			<h2>原神游戏帧率排行(fps)</h2>
			<div v-for="(obj, index) in genshinFpsData" :key="index">
				<rankItem :order="index+1" :phoneName="obj.name" :pivotDisplay="String(obj.fps)" :percent="(obj.fps)" />
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
			genshinFpsData: []
		}
	},
	components: {
		rankItem
	},
	created() {
		//定义数据属性
		var genshinFpsObj = {
			name: '',
			fps: ''
		}
		
		//遍历store.state中所需要的数据到genshinFpsData
		for (var i = 0; i < 32; i++) {
			var genshinFpsObj_2 = JSON.parse(JSON.stringify(genshinFpsObj))
			genshinFpsObj_2.name = this.$store.state[i][0]
			genshinFpsObj_2.fps = this.$store.state[i][7]
			this.genshinFpsData.push(genshinFpsObj_2)
		}
		
		// 排序算法函数
		function compare(propName) {
			return function(obj1, obj2) {
				var a = obj1[propName];
				var b = obj2[propName];
				return a - b; //升序
			}
		}
		
		//按原神游戏帧率，从小到大排序
		this.genshinFpsData = JSON.parse(JSON.stringify(this.genshinFpsData))
		this.genshinFpsData.sort(compare("fps"))
	}
}
</script>

<style>
</style>
