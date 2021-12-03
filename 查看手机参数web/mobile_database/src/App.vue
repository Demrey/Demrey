<template>
  <div id="app">
		<router-view />
		<div class="useless"></div>
		<van-tabbar v-model="active" route>
			<van-tabbar-item name="home" to="/" icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item name="hotSearch" to="/hotSearch" icon="search">
				<div slot="icon">
					<img src="./assets/hotSearch.svg" />
				</div>
				热搜
			</van-tabbar-item>
			<van-tabbar-item name="phone" to="/phone" icon="phone">
				<div slot="icon">
					<img src="./assets/mechine.svg" />
				</div>
				机型
			</van-tabbar-item>
			<van-tabbar-item name="user" to="/user" icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
  </div>
</template>

<script>
export default {
	data () {
		return {
			active: 'home'				
			]
    }
	}
}
</script>
<style>
	.useless {
		height: 50px;
	}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
	.useless {
		height: 50px;
	}
}
</style>
