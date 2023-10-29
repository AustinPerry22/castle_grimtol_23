<template>
  <router-link :to="{name:'Scoreboard'}">
    <div class="topRight"><i class="fs-1 text-warning mdi mdi-trophy"></i></div>
  </router-link>
  </template>


<script>
export default {
  setup(){
  return {  }
  }
};
</script>


<style lang="scss" scoped>
.topRight{
  position: absolute;
  top:10px;
  right:10px;
}

</style>