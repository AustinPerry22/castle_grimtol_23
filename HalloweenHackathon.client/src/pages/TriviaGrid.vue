<template>
    <img v-if="jumpscare" src="https://www.horrormovietalk.com/wp-content/uploads/2018/11/The-Nun-Jump-Scare.jpg" alt="" class="scare-card">
    <div class="container-fluid">
        <div class="row p-0 m-1 d-flex justify-content-between">
            <div v-for="card in cards" :key="card.id" @click="getCard(card)" class="col-4">
                <div v-if="card.type == 0 && !card.locked">
                    <TriviaCard/>
                </div>
                <div v-if="card.type == 1 && !card.locked">
                    spooky
                </div>
                <div v-if="card.type == 2 && !card.locked">
                    hi
                </div>
                <div v-if="card.locked" class="card text-white flex justify-content-center align-items-center my-2 selectable"></div>
            </div>
        </div>
    </div>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import {triviaService} from '../services/TriviaService'
import { logger } from '../utils/Logger';
import ScareCard from '../components/ScareCard.vue';
import TriviaCard from '../components/TriviaCard.vue';
export default {
    setup() {
        onMounted(() => generateCards());
        function generateCards() {
            triviaService.generateCards();
        }
        return {
            jumpscare: computed(() => AppState.jumpscare),
            cards: computed(() => AppState.triviaCards),
            getCard(card) {
                card.locked = false;
            }
        };
    },
    components: { ScareCard, TriviaCard }
};
</script>


<style lang="scss" scoped>
.scare-card{
    height: 100dvh;
    width: 70dvw;
}
.card{
    height: 30dvh;
    background-image: url("https://st4.depositphotos.com/2627021/31189/i/450/depositphotos_311899432-stock-photo-jack-lanterns-spooky-forest-moonlight.jpg") ;
    background-size: cover;
    background-position: center;
}


</style>