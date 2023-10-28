<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
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
.metalMania{
  font-family: 'Metal Mania';
  color:white;
}

.robotoMono{
  color:white;
  font-family: 'Roboto Mono';
}

// :root{
//   --main-height: calc(100vh - 32px - 64px);
// }
// main{
//   height: 100vh;
// }
body{
  background-color: black;
  color:white;
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
