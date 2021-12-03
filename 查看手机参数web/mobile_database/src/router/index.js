import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HotSearch from '../views/HotSearch.vue'
import Phone from  '../views/Phone.vue'
import User from '../views/User.vue'
import PhoneDetail from '../views/PhoneDetail.vue'
import PerformanceRank from '../views/PerformanceRank.vue'
import EnduranceRank from '../views/EnduranceRank.vue'
import PointsRank from '../views/PointsRank.vue'
import GameFpsRank from '../views/GameFpsRank.vue'
import BaseInfoRank from '../views/BaseInfoRank.vue'
import Compare from '../views/Compare.vue'
import CompareDetail from '../views/CompareDetail.vue'
import Classify_Phone_Item from '../components/classify_phone_item.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
	{
		path: '/hotSearch',
		name: 'hotSearch',
		component: HotSearch
	},
	{
		path: '/phone',
		name: 'Phone',
		component: Phone
	},
	{
		path: '/user',
		name: 'User',
		component: User
	},
	{
		path: '/phone-detail',
		name: 'PhoneDetail',
		component: PhoneDetail
	},
	{
		path: '/home/compare',
		name: 'Compare',
		component: Compare
	},
	{
		path: '/home/compare/compare-detail',
		name: 'CompareDetail',
		component: CompareDetail
	},
	{
		path: '/home/performance-rank',
		name: 'PerformanceRank',
		component: PerformanceRank
	},
	{
		path: '/home/endurance-rank',
		name: 'EnduranceRank',
		component: EnduranceRank
	},
	{
		path: '/home/points-rank',
		name: 'PointsRank',
		component: PointsRank
	},
	{
		path: '/home/game-fps-rank',
		name: 'GameFpsRank',
		component: GameFpsRank
	},
	{
		path: '/home/base-info-rank',
		name: 'BaseInfoRank',
		component: BaseInfoRank
	},
	{
		path: '/phone/classify',
		name: 'Classify',
		component: Classify_Phone_Item
	}
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
