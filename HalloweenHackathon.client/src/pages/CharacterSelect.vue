<template>
<div class="container-fluid">
  <section v-for="char in characters" :key="char.id" class="row">
    <div class="col-12 col-md-4">
      <img :src="char.image" :alt="char.name">
    </div>
    <div class="col-12 col-md-8">
      <p>{{ char.description }}</p>
    </div>
  </section>
</div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';

export default {
  setup(){
  return {  }
  }
};
</script>


<style lang="scss" scoped>

</style>