<template>
	<div>
		<div>
			<van-icon :name="iconName"></van-icon>
			<span>{{ header }}</span>
		</div>
		
		<div v-for="(title, index) in Info.slice(start, end)" :key="index">
			<detailInfo :title="title" :content="$store.state[machineId][start + index]"/>
		</div>
	</div>
</template>

<script>
import { store } from '../store'
import detailInfo from './detailInfo.vue'

export default {
	props: {
		start: {
			type: Number
		},
		end: {
			type: Number
		},
		machineId: {
			
		},
		iconName: {
			type: String
		},
		header: {
			type: String
		}
	},
	components: {
		detailInfo
	},
	data () {
		return {
			Info: [
				'机型', '上市时间', '处理器', '系统', '屏幕尺寸(英寸)', '机身重量(克)', '电池容量(mAh)','三小时轻度续航测试剩余电量(%)',
				'20款应用两轮打开时间(s)', '原神最高画质帧率(fps)', 'GeekBench5多核跑分'
			]
		}
	}
}
</script>

<style>
</style>
