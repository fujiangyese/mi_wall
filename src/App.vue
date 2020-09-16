<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="text" v-model="message">{{message|capitalize}}
  </div>
</template>
// filters 过滤器，使用范围：插值表达式，v-bind表达式(在2.1版本后才有) 
// filters 作用是将前面的数据进行过滤返回，用法：在数据变量后加上|跟上具体的filter
// filters 写法：在filters属性中写上具体的过滤函数，需要接收一个参数value，代表当前变量
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data(){
    return {
      message:''
    }
  },
  filters:{
    capitalize(value){
      if (!value){
        return ''
      }
      return value[0].toUpperCase()+value.slice(1)
    }
  }
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
