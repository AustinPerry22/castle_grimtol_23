<template>
  <div class="container">
    <section class="row background-img">
      <div class="col-12 text-center">
        <h1 class="text">
          {{ potion.name }}
        </h1>
      </div>
      <section class="row justify-content-center">
        <div class="col-5">
          <img class="courage-img" :src="potion.img" alt="courage potion">
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
setup() {
  return {
    potion: computed(()=> AppState.activePotion)
  };
},
};
</script>


<style>
.background-img{
  background-image: url('https://images.unsplash.com/photo-1633446259606-45413db196a7?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  border-radius: 10px;
  height: 30vh;
  width: 62vh;
}

.courage-img{
  max-height: 25vh;
  aspect-ratio: 1/1;
}

.text{
  font-family: 'Metal Mania';
}
</style>