<template>
  <!-- <router-link :to="{name:'Scoreboard'}"> -->
    <div class="topRight">
      <i class="fs-1 text-warning mdi mdi-trophy selectable btn" @click="showScoreboard()"></i>
    </div>
  <!-- </router-link> -->
  </template>


<script>
import { Modal } from "bootstrap";

export default {
  setup(){
    return {
      showScoreboard() {
        Modal.getOrCreateInstance('#scoreboard').show();
    }
    }
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