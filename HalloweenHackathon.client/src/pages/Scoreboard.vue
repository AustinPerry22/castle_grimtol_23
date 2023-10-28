
<template>
<div class="container-fluid">
  <section class="row justify-content-center">
    <div class="col-12 d-flex justify-content-center p-1 pt-5">
      <div class="text-center">
        <p class="fs-1 courier p-1 px-md-5 bg-green ">High Scores</p>
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
import { AppState } from '../AppState.js';
import { computed, onMounted } from 'vue';
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
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