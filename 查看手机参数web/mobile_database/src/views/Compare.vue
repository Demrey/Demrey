<template>
	<div>
		<h1>机型对比</h1>
		<div>
			<van-field
				readonly
				clickable
				:value="value_1"
				placeholder="+ 选择对比机型"
				@click="showPicker_1 = true"
			/>
			<van-popup v-model="showPicker_1" round position="bottom">
				<van-picker
					show-toolbar
					:columns="columns"
					@cancel="showPicker_1 = false"
					@confirm="onConfirm_1"
				/>
			</van-popup>
		</div>
		
		
		<div>
			<van-field
				readonly
				clickable
				:value="value_2"
				placeholder="+ 选择对比机型"
				@click="showPicker_2 = true"
			/>
			<van-popup v-model="showPicker_2" round position="bottom">
				<van-picker
					show-toolbar
					:columns="columns"
					@cancel="showPicker_2 = false"
					@confirm="onConfirm_2"
				/>
			</van-popup>
		</div>
		
		<router-link :to="{ name: 'CompareDetail', params: { idx_1: this.index_1, idx_2: this.index_2 } }">
			<van-button>对比</van-button>
		</router-link>
	</div>
</template>

<script>
import { store } from '../store'
export default {
	data() {
		return {
			value_1: '',
			showPicker_1: false,
			value_2: '',
			showPicker_2: false,
			index_1: null,
			index_2: null,
			
			columns: []
		};
	},
	created() {
		for (var i = 0; i < 32; i++)
		{
			this.columns.push(this.$store.state[i][0])
		}
	},
	methods: {
		onConfirm_1(value, index) {
			this.value_1 = value;
			this.showPicker_1 = false;
			this.index_1 = index
		},
		onConfirm_2(value, index) {
			this.value_2 = value;
			this.showPicker_2 = false;
			this.index_2 = index
		},
	}
};
</script>

<style>
</style>
