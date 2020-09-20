<template>
  <div>
      <img src="../assets/01.png" alt="">
      <input type="text" v-model="inputValue" placeholder="请输入要查询的歌曲名称">
  </div>
</template>

<script>
export default {
    data(){
        return {
            inputValue:''
        }
    },

}
</script>

<style>

</style>