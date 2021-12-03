<template>
	<div>
		<div>
			<van-search shape="round" v-model="words" placeholder="输入你想了解的型号" @search="onSearch"/>
			
			<van-sidebar v-model="activeKey" @change="onChange">
				<van-sidebar-item title="搜索" @click="clearSearch"/>
				<van-sidebar-item title="华为" />
				<van-sidebar-item title="小米" />
				<van-sidebar-item title="Redmi" />
				<van-sidebar-item title="苹果" />
				<van-sidebar-item title="三星" />
				<van-sidebar-item title="魅族" />
				<van-sidebar-item title="一加" />
				<van-sidebar-item title="vivo" />
				<van-sidebar-item title="oppo" />
				<van-sidebar-item title="红魔" />
				<van-sidebar-item title="ROG" />
				<van-sidebar-item title="黑鲨" />
			</van-sidebar>
			
			<div class="phone-classify-main-content-container">
				<div  v-if="activeKey == 0" class="phone-classify-main-content">
					<div v-for="(name, index) in searchResultData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: name.idx} }">
							<ClassifyItem :text=name.title :address=name.url />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 1" class="phone-classify-main-content">
					<div v-for="(name, index) in HuaweiData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 2" class="phone-classify-main-content">
					<div v-for="(name, index) in XiaomiData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+5} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 3" class="phone-classify-main-content">
					<div v-for="(name, index) in RedmiData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+8} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 4" class="phone-classify-main-content">
					<div v-for="(name, index) in AppleData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+11} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 5" class="phone-classify-main-content">
					<div v-for="(name, index) in SamsungData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+17} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 6" class="phone-classify-main-content">
					<div v-for="(name, index) in MeizuData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+19} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 7" class="phone-classify-main-content">
					<div v-for="(name, index) in OneplusData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+20} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 8" class="phone-classify-main-content">
					<div v-for="(name, index) in VivoData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+23} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 9" class="phone-classify-main-content">
					<div v-for="(name, index) in OppoData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+26} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 10" class="phone-classify-main-content">
					<div v-for="(name, index) in RedmoData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+28} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 11" class="phone-classify-main-content">
					<div v-for="(name, index) in RogData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+29} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
				
				<div v-if="activeKey == 12" class="phone-classify-main-content">
					<div v-for="(name, index) in BlacksharpData" :key="index">
						<router-link :to="{ name: 'PhoneDetail', params: { ID: index+30} }">
							<ClassifyItem :text=String(Object.keys(name)) :address=String(Object.values(name)) />
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ClassifyItem from '../components/classify_phone_item.vue'
import { store } from '../store'
export default {
  name: 'Phone',
	components: {
		ClassifyItem
	},
	data () {
		return {
			activeKey: 1,
			words: '',
			searchResultData: [],
			HuaweiData: [
				{'华为P50 Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/p50_pro.png'},
				{'华为P50': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/p50.jpg'},
				{'华为P40 Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/p40_pro.jpg'},
				{'华为Mate 40 Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/mate40_pro.jpg'},
				{'华为Mate 40': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/mate40.jpg'}
			],
			XiaomiData: [
				{'小米MIX4': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/xiaomi/xiaomi_mix4%20.jpg'},
				{'小米10s': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/xiaomi/xiaomi10s.jpg'},
				{'小米11 Ultra': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/xiaomi/xiaomi11_ultra.jpg'}
			],
			RedmiData: [
				{'红米K40': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/redmi/redmi_k40.jpg'},
				{'红米 K40 Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/redmi/redmi_k40_pro.jpg'},
				{'红米Note 11 Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/redmi/redmi_note11_pro.jpg'}
			],
			AppleData: [
				{'iPhone 12': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone12.jpg'},
				{'iPhone 12 Mini': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone12_mini.jpg'},
				{'iPhone 13': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone13.jpg'},
				{'iPhone 13 Mini': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone13_mini.jpg'},
				{'iPhone 13 Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone13_pro.jpg'},
				{'iPhone 13 Pro Max': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone13_pro_max.jpg'}
			],
			SamsungData: [
				{'三星Note20 Ultra': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/samsung/samsung_note20_ultra.jpg'},
				{'三星S21+': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/samsung/samsung_s21+.jpg'}
			],
			MeizuData: [
				{'魅族18': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/meizu/meizu18.jpg'}
			],
			OneplusData: [
				{'一加9': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oneplus/oneplus9.jpg'},
				{'一加9 Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oneplus/oneplus9_pro.jpg'},
				{'一加9R': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oneplus/oneplus9R.jpg'}
			],
			VivoData: [
				{'vivo IQOO Z5': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/vivo/iqoo_z5.jpg'},
				{'vivo IQOO 8 Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/vivo/iqoo8_pro.jpg'},
				{'Realme GT Neo2': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/vivo/realme_gt_neo2.jpg'}
			],
			OppoData: [
				{'OPPO Find X3': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oppo/find_x3.jpg'},
				{'OPPO Reno 6 Pro+': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oppo/reno6_pro+.jpg'}
			],
			RedmoData:[
				{'红魔6s Pro': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/redmo/redmo6s_pro.jpg'}
			],
			RogData: [
				{'ROG 5': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/ROG/rog5.jpg'}
			],
			BlacksharpData: [
				{'黑鲨4': 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/blacksharp/blacksharp4.jpg'},
			]
		}
	},
	methods: {
		onChange (index) {
			this.activeKey = index
		},
		
		clearSearch () {
			this.searchResultData = []
		},
		onSearch (value) {
			this.activeKey = 0
			this.searchResultData = []
			var searchResultItem = {
				title: '',
				url: '',
				idx: ''
			}
			const searchData = this.$store.state
			for (var i = 0; i < 32; i++)
			{
				if (searchData[i][0].indexOf(value) != -1) {
					var searchResultItem_2 = JSON.parse(JSON.stringify(searchResultItem))
					searchResultItem_2.title = searchData[i][0]
					searchResultItem_2.url = searchData[i][11]
					searchResultItem_2.idx = i
					this.searchResultData.push(searchResultItem_2)
				}
			}
		}
	}
}
</script>

<style>
	.phone-classify-main-content-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		width: 332px;
		top: 54px;
		left: 80px;
		padding-top: 10px;
	} 
	
	.phone-classify-main-content {
		width: 300px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		
	}
</style>
