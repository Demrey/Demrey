<template>
	<div>
		<div style="text-align: center;">
			<span>
				<router-link :to="{ name: 'Compare' }">
					<van-icon class="back" name="arrow-left" />
				</router-link>
			</span>
			<span style="font-size: 30px; font-weight: bold; margin-left: -20px;">机型对比</span>
		</div>
		
		<van-row type="flex" justify="space-around">
			<van-col span="7">
				<span v-for="(subject, index) in $store.state.detailSubjectList" :key="index">
					<van-row class="subject">
						<span class="subjectText">{{subject}}</span>
					</van-row>
				</span>
			</van-col>
			<van-col span="7">
				<span v-for="(paramName_1, index) in this.Id_1_data" :key="index">
					<van-row class="subject">
						<span class="paramText">{{paramName_1}}</span>
					</van-row>
				</span>
			</van-col>
			<van-col span="7">
				<span v-for="(paramName_2, index) in this.Id_2_data" :key="index">
					<van-row class="subject">
						<span class="paramText">{{paramName_2}}</span>
					</van-row>
				</span>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import { store } from '../store'
export default {
	name: 'CompareDetail',
	data () {
		return {
			Id_1: this.$route.params.idx_1,
			Id_2: this.$route.params.idx_2,
			Id_1_data: [],
			Id_2_data: []
		}
	},
	mounted() {
		this.Id_1_data = this.$store.state[this.Id_1].slice(0, 11)
		this.Id_2_data = this.$store.state[this.Id_2].slice(0, 11)
	}
}
</script>

<style>
	.back {
		float: left;
		margin-top: 18px;
		margin-left: 20px;
	}
	
	.subject {
		height: 60px;
		position: relative;
	}
	
	.paramText {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 13px;
	}
	
	.subjectText {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 13px;
		color: #2E8B57;
		font-weight: bold;
	}
</style>
