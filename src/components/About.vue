<template>
  <div>
      <h1>{{msg}}</h1>
      <button @click="add()">+++++</button>
      {{this.$store.state.qm.myNum}}
      <button @click="del()">-----</button>
      <button @click="dispatchAdd">dispatch</button>
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
            this.$store.commit('addNumber',{num:10})
        },
        del(){
            this.$store.commit('delNumber')
        },
        dispatchAdd(){
            this.$store.dispatch('asyncAdd',{num:100})
        }
    },
    mounted(){
        console.log(this)
        console.log(this.$store.state.qm)
    }
}
</script>

<style>

</style>