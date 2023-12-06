
<template>
<div class="container-fluid rounded">
  <section class="row justify-content-center pb-5">
    <div class="col-12 d-flex justify-content-center p-1 py-5">
      <div class="text-center">
        <p class="fs-1 courier p-1 px-md-5 bg-green metalMania">&nbsp; High Scores &nbsp; </p>
      </div>
    </div>
    <div v-for="score in scores" :key="score._id" class="col-12 p-1 d-flex justify-content-center">
      <div class="d-flex justify-content-between px-3 py-2 scoreboard">
        <p class="fs-4 fw-bold">{{ score.name }}</p>
        <p class="fs-4 fw-bold px-2">:</p>
        <p class="fs-4 fw-bold">{{score.score}}</p>
      </div>
    </div>
  </section>
</div>
</template>


<script>
import Pop from "../utils/Pop";
import { AppState } from '../AppState.js';
import { computed, onMounted } from 'vue';
import { logger } from "../utils/Logger";
import { scoresService } from '../services/ScoresService.js';

export default {
  setup() {
    async function _getScores() {
      try {
        scoresService.getScores();
      } catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }
    onMounted(() => {
      _getScores();
    })
    return { 
    scores: computed(()=>AppState.scores)
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

.metalMania{
  font-family: 'Metal Mania';
  color:white;
}

.robotoMono{
  color:white;
  font-family: 'Roboto Mono';
}

p {
  font-family: 'Courier New', Courier, monospace;
  color: #28ff82;
  font-weight: bold;
  margin-bottom: 0;
  }

  .bg-green{
      background-color: #28ff82;
      color: black;
  }

  .scoreboard{
    width: 42vh;
    border: 2px dashed #28ff82;
  }
</style>