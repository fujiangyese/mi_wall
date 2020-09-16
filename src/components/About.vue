<template>
  <div>
      <h1>{{msg}}</h1>
      <h1>{{$route.query.age}}</h1>
  </div>
</template>

<script>
export default {
    name:'About',
    data(){
        return{
            msg:'这是About页面'
        }
    }
}
</script>

<style>

</style>