<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld :msg="msg" />
		<h1>这是父组件接收到子组件传递的数据：{{ hello }}</h1>
		<Demo :thief="thief">
			<p slot="slot-1">这是一个插槽存放的数据</p>
		</Demo>
		<ul>
			<li v-for="item in items" :key="item.name">{{ item.name }}</li>
		</ul>
		<button @click="change()">点击修改数组数据</button>
	</div>
</template>

<script>
// import Vue from 'vue'
import HelloWorld from "./components/HelloWorld.vue";
import Demo from "./components/Demo.vue";
// import axios from "axios"
export default {
	name: "App",
	components: {
		HelloWorld,
		Demo,
	},
	data() {
		return {
			msg: "",
			hello: "这是父组件中的默认值",
			items: [{ name: "小王" }, { name: "小米" }],
		};
	},
	mounted() {
		// let url = "https://www.easy-mock.com/mock/5f609036ed072c1818dd6deb/example/restful/:id/list"
		// axios.get(url).then((res)=>{
		//   console.log(res.data['data'][0]['user']['name'])
		//   this.msg = res.data
		//   })
	},
	methods: {
		thief(hello_data) {
			this.hello = hello_data;
			// 将子组件中的数据当做参数传递给父组件
		},
		change() {
			// this.items[0] = {'name':'老王'}
			this.$set(this.items, 0, { name: "老王" });
			console.log(this.items);
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
