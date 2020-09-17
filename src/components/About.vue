<template>
  <div>
      <h1>{{msg}}</h1>
      <button @click="add()">+++++</button>
      {{this.$store.state.myNum}}
      <button @click="del()">-----</button>
  </div>
</template>

<script>
export default {
    name:'About',
    data(){
        return{
            msg:'这是About页面'
        }
    },
    methods:{
        add(){
            this.$store.commit('addNumber')
        },
        del(){
            this.$store.commit('delNumber')
        }
    },
    mounted(){
        console.log(this)
        console.log(this.$store.state)
    }
}
</script>

<style>

</style>