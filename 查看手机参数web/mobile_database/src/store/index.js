import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
		0: [
			'华为P50 Pro','2021-07-29', '麒麟9000', 'Harmony OS', 6.6, 195, 4360, 54, 124,
			49.01, 3727, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/p50_pro.png'
		],
		1: [
			'华为P50', '2021-09-29', '高通888', 'Harmony OS', 6.5, 181, 4100, 42, 140,
			56.5, 3492, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/p50.jpg'
		],
		2: [
			'华为Mate 40 Pro', '2020-10-22','麒麟9000', 'Harmony OS', 6.76, 212, 4400, 56, 114,
			49.75, 3737, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/mate40_pro.jpg'
		],
		3: [
			'华为Mate 40', '2020-10-22', '麒麟9000E', 'Harmony OS', 6.5, 188, 4200, 57, 114,
			54, 3800, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/mate40.jpg'
		],
		4: [
			'华为P40 Pro', '2021-08-10', '麒麟990 5G', 'Harmony OS', 6.58, 209, 4200, 44, 102,
			50, 3165, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/huawei/p40_pro.jpg'
		],
		5: [
			'小米MIX4', '2021-08-10', '高通888+', 'MIUI 12', 6.67, 225, 4500, 58, 102,
			46, 3663, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/xiaomi/xiaomi_mix4%20.jpg'
		],
		6: [
			'小米10s', '2021-03-10', '高通870', 'MIUI 12', 6.67, 208, 4780, 55, 117,
			57.3, 3688, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/xiaomi/xiaomi10s.jpg'
		],
		7: [
			'小米11 Ultra', '2021-03-29', '高通888', 'MIUI 12', 6.81, 234, 5000, 55, 101,
			44.56, 3664, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/xiaomi/xiaomi11_ultra.jpg'
		],
		8: [
			'红米K40', '2021-02-25', '高通870', 'MIUI 12', 6.67, 196, 4520, 65, 119,
			55.5, 3485, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/redmi/redmi_k40.jpg'
		],
		9: [
			'红米K40 Pro', '2021-02-25', '高通888', 'MIUI 12', 6.67, 196, 4520, 65, 119,
			55.5, 3702, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/redmi/redmi_k40_pro.jpg'
		],
		10: [
			'红米Note 11 Pro', '2021-10-28', '天玑920', 'MIUI 12', 6.67, 200, 5000, 66, 138,
			40, 3200, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/redmi/redmi_note11_pro.jpg'
		],
		11: [
			'iPhone 12', '2020-10-14', 'A14', 'IOS 14.1', 6.1, 162, 2800, 50, 95,
			57.8, 4117, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone12.jpg'
		],
		12: [
			'iPhone 12 Mini', '2020-10-14', 'A14', 'IOS 14.1', 5.4, 133, 2227, 55, 95,
			58, 4037, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone12_mini.jpg'
		],
		13: [
			'iPhone 13', '2021-09-15', 'A15', 'IOS 15', 6.1, 173, 3227, 64, 122,
			52.25, 4695, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone13.jpg'
		],
		14: [
			'iPhone 13 Minni', '2021-09-15', 'A15', 'IOS 15', 5.4, 140, 2406, 53, 118,
			53.28, 4644, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone13_mini.jpg'
		],
		15: [
			'iPhone 13 Pro', '2021-09-15', 'A15', 'IOS 15', 6.1, 203, 3095, 58, 92,
			57.6, 4844, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone13_pro.jpg'
		],
		16: [
			'iPhone 13 Pro Max', '2021-09-15', 'A15', 'IOS 15', 6.7, 238, 4352, 68, 92,
			54.3, 4880, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/apple/iphone13_pro_max.jpg'
		],
		17: [
			'三星Note 20 Ultra', '2020-08-28', '高通865+', 'One UI', 6.9, 208, 4500, 52, 109,
			50.1, 3181, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/samsung/samsung_note20_ultra.jpg'
		],
		18: [
			'三星S21+', '2021-01-18', '高通888', 'One UI', 6.7, 200, 4800, 54, 151,
			45.1, 3399, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/samsung/samsung_s21+.jpg'
		],
		19: [
			'魅族18', '2021-03-08', '高通888', 'Flyme', 6.2, 162, 4000, 55, 101,
			48, 3667, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/meizu/meizu18.jpg'
		],
		20: [
			'一加9', '2021-03-24', '高通888', 'ColorOS', 6.55, 183, 4500, 48, 105,
			48, 3424, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oneplus/oneplus9.jpg'
		],
		21: [
			'一加9 Pro', '2021-03-24', '高通888', 'ColorOS', 6.7, 197, 4500, 47, 110,
			49.6, 3514, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oneplus/oneplus9_pro.jpg'
		],
		22: [
			'一加9R', '2021-04-15', '高通870', 'ColorOS', 6.55, 189, 4500, 62, 111,
			48.8, 3259, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oneplus/oneplus9R.jpg'
		],
		23: [
			'IQOO Z5', '2021-09-23', '高通778', 'OriginOS', 6.67, 193, 5000, 69, 135,
			39.8, 2985, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/vivo/iqoo_z5.jpg'
		],
		24: [
			'IQOO 8 Pro', '2021-08-17', '高通888+', 'OriginOS', 6.78, 203, 4500, 53, 112,
			56.92, 3728, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/vivo/iqoo8_pro.jpg'
		],
		25: [
			'Realme GT Neo 2', '2021-09-22', '高通870', 'realme UI', 6.62, 200, 5000, 53, 109,
			47.12, 3162, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/vivo/realme_gt_neo2.jpg'
		],
		26: [
			'OPPO Find X3', '2021-03-11', '高通870', 'ColorOS11', 6.7, 193, 4500, 61, 130,
			48, 3216, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/oppo/find_x3.jpg'
		],
		27: [
			'OPPO Reno 6 Pro+', '2021-05-28', '高通870', 'ColorOS11', 6.55, 188, 4500, 55, 117,
			51.64, 3197, 'https://gitee.com/Demrey/pictures/blob/master/thumbnail/oppo/reno6_pro+.jpg'
		],
		28: [
			'红魔6s Pro', '2021-09-06', '高通888+', 'Red Magic OS', 6.8, 215, 4500, 58, 94,
			56.75, 3656, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/redmo/redmo6s_pro.jpg'
		],
		29: [
			'ROG 5', '2021-03-10', '高通888', 'ROG UI', 6.78, 238, 6000, 55, 107,
			58.26, 3712, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/ROG/rog5.jpg'
		],
		30: [
			'黑鲨4', '2021-03-23', '高通870', 'JOY UI', 6.67, 210, 4500, 64, 113,
			56.7, 3414, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/blacksharp/blacksharp4.jpg'
		],
		31: [
			'荣耀Magic3 Pro', '2021-08-12', '高通888+', 'Magic UI', 6.76, 213, 4600, 54, 107,
			54.01, 3627, 'https://gitee.com/Demrey/pictures/raw/master/thumbnail/honor/honor_magic3_pro.jpg'
		],
		detailSubjectList: [
			'名字', '上市时间', 'CPU', '系统', '屏幕尺寸', '机身重量', '电池容量', '三小时续航测试剩余电量',
			'20款应用两轮打开时间', '原神最高画质平均帧率(fps)', 'GeekBench5多核跑分'
		],
		compare_phone1_data: [],
		compare_phone2_data: []
  },
  mutations: {
		compare_phone1_data(s, d) {
			s.compare_phone1_data = d;
			window.localStorage.setItem("list", JSON.stringify(s.compare_phone1_data))
		},
		compare_phone2_data(s, d) {
			s.compare_phone2_data = d;
			window.localStorage.setItem("list", JSON.stringify(s.compare_phone2_data))
		},
  },
  actions: {
  },
  modules: {
  }
})
