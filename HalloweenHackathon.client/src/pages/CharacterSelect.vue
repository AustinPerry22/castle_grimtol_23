<template>
  <div v-if="!player.character" class="container-fluid charSelectBG p-2 p-md-3">
    <section class="row">
      <div class="col-12">
        <p class="fs-1 metalMania text-center">Select your character</p>
      </div>
    </section>
    <section v-for="char in characters" :key="char.id" @click="selectCharacter(char)" 
      class="row border rounded p-1 p-md-3 m-1 m-md-3 justify-content-center selectable darken-10" type="button" :title="'Click to Choose '+ char.name">
      <div class="col-12 col-md-2 p-1 p-md-3 d-flex justify-content-end" >
        <img :src="char.picture" :alt="char.name" class="rounded">
      </div>
      <div class="col-12 col-md-6 p-3 d-flex align-items-center">
        <p class="robotoMono p-1 p-md-3 m-1 m-md-3 rounded bgBlur">{{ char.description }}</p>
      </div>
      <div class="col-12 col-md-2 p-1 p-md-3 d-flex justify-content-start">
        <img :src="char.altPicture" :alt="char.altName" class="rounded">
      </div>
    </section>
  </div>
  <div v-else class="container-fluid charSelectBG p-1 p-md-3">
    <section class="row p-2 p-md-5">
        <div class="col-12">
          <p class="fs-1 metalMania text-center mt-3">You have selected:</p>
          <p class="fs-3 metalMania text-center">the {{ player.character.name }}</p>
        </div>
      </section>
    <section class="row border rounded p-1 p-md-3 m-1 m-md-3 justify-content-center">
      <div class="col-12 col-md-2 p-3 d-flex justify-content-end">
        <img :src="player.character.picture" :alt="player.character.name" :title="player.character.name" class="rounded">
      </div>
      <div class="col-12 col-md-6 p-1 p-md-3 d-flex align-items-center">
        <p class="robotoMono p-1 p-md-3 m-1 m-md-3 rounded bgBlur">{{ player.character.description }}</p>
      </div>
      <div class="col-12 col-md-2 p-1 p-md-3 d-flex justify-content-start">
        <img :src="player.character.altPicture" :alt="player.character.altName" :title="player.character.altName" class="rounded">
      </div>
    </section>
    <section class="row p-2 p-md-5">
        <div class="col-12 text-center">
          <router-link :to="{name:'Map'}">
            <button class="btn border-danger fs-1 metalMania text-center mt-3">Are you ready?</button>
          </router-link>
          <div class="backButton pt-2 pt-md-5" @click="unselectCharacter()" type="button" title="Back to select">
            <i class="fs-1 text-danger mdi mdi-backspace"></i>
          </div>
        </div>
      </section>
    </div>
<ScoreboardButton />
</template>


<script>
import { AppState } from '../AppState.js';
import { computed, onMounted } from 'vue';
import { characterService } from '../services/CharacterService.js';
import ScoreboardButton from "../components/ScoreboardButton.vue";

export default {
    setup() {
        onMounted(() => {
        });
        return {
            characters: computed(() => AppState.characters),
            player: computed(() => AppState.player),
            selectCharacter(char) {
                characterService.setCharacter(char);
            },
            unselectCharacter() {
                characterService.unsetCharacter();
            },
        };
    },
    components: { ScoreboardButton }
};
</script>


<style lang="scss" scoped>

.metalMania{
  font-family: 'Metal Mania';
  color:white;
}

.robotoMono{
  color:white;
  font-family: 'Roboto Mono';
}

img{
  height: 16rem;
}

.bgBlur{
    backdrop-filter: blur(2px);
    border: 1px white
}

.selectable{
  transform: scale(97%);
  transition: .25s;
}
.selectable:hover{
  transform: scale(100%);
}

.charSelectBG{
  background-color: #123456;
  background-image: url('../assets/img/grimtolTownWideLowContrast.png');
  background-position: center;
  background-size: cover;
}


.backButton{
  position: absolute;
  top: 1.666rem;
  left:2rem;
  opacity: .666;
}
</style>