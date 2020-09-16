<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <router-link :to="{name:'About',query:{age:18}}">跳转到About</router-link> -->
    <router-link :to="{name:'About',query:{age:18}}">H1和H2</router-link>
    <router-link :to="{name:'Change',query:{age:18}}">H2和H1</router-link>

    <router-view></router-view>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
    <button @click="goToLastPage">回到上一个页面</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data(){
    return {
      msg:'来自主视图的数据'
    }
  },
  methods: {
    goToLastPage(){
      this.$router.go(-1)   //跳转到上一个页面
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
