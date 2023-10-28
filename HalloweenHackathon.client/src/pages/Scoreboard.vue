
<template>
<div class="container-fluid">
  <section class="row">
    <div class="col-12">
      <p class="fs-1 courier">test test one two</p>
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

.courier {
  font-family: 'Courier New', Courier, monospace;
  }
</style>