<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<button @click="testWatch">watch的使用</button>
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
	data() {
		return {
			watcher_data: {'name':'小明'},
		};
	},
	methods: {
		testWatch() {
			this.watcher_data.name = "老王";
		},
	},
	watch: {
		'watcher_data.name':function(to,from){
      console.log(to,from)
    }
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
