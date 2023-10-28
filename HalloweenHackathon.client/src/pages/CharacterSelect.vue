<template>
<div class="container-fluid charSelectBG p-3">
  <section class="row">
    <div class="col-12">
      <p class="fs-1 metalMania text-center mt-3">Select your character</p>
    </div>
  </section>
  <section v-for="char in characters" :key="char.id" class="row border rounded p-3 m-3 justify-content-center">
    <div class="col-12 col-md-2 p-3 d-flex justify-content-end">
      <img :src="char.picture" :alt="char.name" class="rounded">
    </div>
    <div class="col-12 col-md-6 p-3 d-flex align-items-center">
      <p class="robotoMono p-3 m-3 rounded bgBlur">{{ char.description }}</p>
    </div>
    <div class="col-12 col-md-2 p-3 d-flex justify-content-start">
      <img :src="char.altPicture" :alt="char.altName" class="rounded">
    </div>
  </section>
  <!-- <section class="row">
    <div class="col-12 col-md-3">
        <img :src="player.char.picture" :alt="char.name">
      </div>
      <div class="col-12 col-md-6">
        <p class="robotoMono p-3 m-3 rounded bgBlur">{{ char.description }}</p>
      </div>
      <div class="col-12 col-md-3">
        <img :src="char.altPicture" :alt="char.altName">
      </div>
  </section> -->
</div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';

export default {
  setup() {
    
    return { 
    characters: computed(()=> AppState.characters),
    
    }
  }
};
</script>


<style lang="scss" scoped>
@charset "UTF-8";
@import"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,600;1,400&family=Metal+Mania&family=VT323&display=swap";
@font-face {
    font-family: grimtol_23;
    src: url(/assets/grimtol_23-7d80159c.eot?9ep1bj);
    src: url(/assets/grimtol_23-7d80159c.eot?9ep1bj#iefix) format("embedded-opentype"),url(/assets/grimtol_23-0c4b637f.ttf?9ep1bj) format("truetype"),url(/assets/grimtol_23-c6fd7f9b.woff?9ep1bj) format("woff"),url(/assets/grimtol_23-460adf95.svg?9ep1bj#grimtol_23) format("svg");
    font-weight: 400;
    font-style: normal;
    font-display: block
}

img{
  height: 16rem;
}
.metalMania{
  font-family: 'Metal Mania';
  color:white;
}

.robotoMono{
  color:white;
  font-family: 'Roboto Mono';
}

.bgBlur{
    backdrop-filter: blur(2px);
    border: 1px white
}

.charSelectBG{
  height: 100%;
  width: 100%;
  background-color: #123456;
  background-image: url('../assets/img/grimtolTownWideLowContrast.png');
  background-position: center;
  background-size: cover;
}

</style>