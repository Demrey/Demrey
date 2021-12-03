<template>
	<div>
		<h2>本周热搜</h2>
		<div class="hotRank">
			<div v-for="(text, index) in hotRank" :key="index">
				<hotItem :numbers=String(Object.values(text)) :rank="index+1" :phoneId="Object.keys(text)"/>
			</div>
		</div>
	</div>
</template>

<script>
import hotItem from '../components/hotItem.vue'

export default {
  name: 'Search',
	components: {
		hotItem
	},
	data () {
		return {
			hotRank: [
				{10: 9858},
				{25: 9455},
				{16: 8400},
				{3: 8011},
				{1: 7666},
				{15: 7044},
				{23: 6899},
				{0: 5379},
				{6: 3668}
			]
		}
	}
}
</script>

<style>
	.hotRank {
		
	}
</style>
