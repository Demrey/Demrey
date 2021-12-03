<template>
	<div>
		<div v-if="logined === false">
			<h2>登陆/注册</h2>
			<van-form @submit="onLogin">
				<van-field
					v-model="username"
					name="用户名"
					label="用户名"
					placeholder="请输入用户名"
				/>
				<van-field
					v-model="tel"
					name="账号"
					label="手机号/邮箱"
					placeholder="请输入手机号或邮箱"
				/>
				<van-field
					v-model="password"
					name="密码"
					type="password"
					label="密码"
					placeholder="请输入密码"
				/>
				<div class="summit">
					<van-button round block type="info" native-type="submit">登陆/注册</van-button>
				</div>
			</van-form>
		</div>
		
		<div v-if="logined === true" class="logged-container">
			<div>
				<van-icon name="manager-o" size="40" class="user-icon"/>
			</div>
			
			<div class="username">
				{{ username }}
			</div>
			<div class="account">
				{{ tel }}
			</div>
			
			<div class="sign-out">
				<van-button @click="signOut" block round >退出登陆</van-button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Dialog } from 'vant';
import computed from 'vue';

export default {
  name: 'User',
	data () {
		return {
			logined: false,
			username: '',
			tel: '',
			password: ''
		}
	},
	components: {
		[Dialog.Component.name]: Dialog.Component
	},
	methods: {
		onLogin() {
			this.logined = true
		},
		signOut() {
			Dialog.confirm({
				title: '是否确认退出登陆'
			})
				.then(() => {
					this.logined = false
				})
		}
	},
	watch: {
		logined: {
			handler() {
				sessionStorage.setItem("logined", JSON.stringify(this.logined))    
			},
			deep: true
		},
		username: {
			handler() {
				sessionStorage.setItem("username", JSON.stringify(this.username))    
			},
			deep: true
		},
		tel: {
			handler() {
				sessionStorage.setItem("tel", JSON.stringify(this.tel))    
			},
			deep: true
		}
	},
	mounted() {
		var logined = sessionStorage.getItem("logined");
		var username = sessionStorage.getItem("username");
		var tel = sessionStorage.getItem("tel");
		if(logined) {
			this.logined = JSON.parse(logined);
		}
		if(username) {
			this.username = JSON.parse(username);
		}
		if(tel) {
			this.tel = JSON.parse(tel);
		}
	},
	unmounted() {
		sessionStorage.setItem("logined", JSON.stringify(this.logined))
		sessionStorage.setItem("username", JSON.stringify(this.username))
		sessionStorage.setItem("tel", JSON.stringify(this.tel))
	}
}
</script>

<style>
	.account-login {
		float: left;
		margin-top: 15px;
		margin-left: 17px;
		font-size: 12px;
		color: seagreen;
	}
	
	.summit {
		margin: 30px;
	}
	
	.user-icon {
		margin-top: 20px;
	}
	
	.username {
		margin-top: 10px;
	}
	
	.account {
		margin-top: 10px;
	}
	
	.logged-container {
		
		position: absolute;
		height: 686px;
		width: 414px;
	}
	
	.sign-out {
		position: absolute;
		bottom: 10px;
		width: 100%;
		text-align: center;
	}
</style>
