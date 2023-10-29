<template>
    <img v-if="jumpscare" src="https://www.horrormovietalk.com/wp-content/uploads/2018/11/The-Nun-Jump-Scare.jpg" alt="" class="scare-card">
    <div class="container-fluid">
        <div class="row p-0 m-1 d-flex justify-content-between">
            <div v-for="card in cards" :key="card.id" @click="getCard(card)" class="col-4">
                <div v-if="card.type == 0 && !card.locked">
                    <TriviaCard :card="card"/>
                </div>
                <div v-if="card.type == 1 && !card.locked">
                    <CourageItemCard/>
                </div>
                <div v-if="card.type == 2 && !card.locked">
                    <ScareCard/>
                    
                </div>
                <div v-if="card.locked" class="card text-white flex justify-content-center align-items-center my-2 selectable"></div>
            </div>
        </div>
    </div>
    <audio id="audio" class="d-none" src="../assets/music/Cinematic Horror/female-scream-horror_120bpm.wav"></audio>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import {triviaService} from '../services/TriviaService'
import { logger } from '../utils/Logger';
import ScareCard from '../components/ScareCard.vue';
import TriviaCard from '../components/TriviaCard.vue';
import Pop from '../utils/Pop';
export default {
    setup() {
        onMounted(() => {
            generateCards()
            getQuestions()
        });
        function generateCards() {
            triviaService.generateCards();
        }
        async function getQuestions()
        {
            try {
                triviaService.getQuestions()
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            jumpscare: computed(() => AppState.jumpscare),
            cards: computed(() => AppState.triviaCards),
            getCard(card) {
                card.locked = false;

                if(card.type == 0){
                    // const randomNumber = Math.floor(Math.random() * 3)
                    
                }
                else if (card.type == 1) {
                    const randomNumber = Math.floor(Math.random() * 2)
                    logger.log('random number for type 1:', randomNumber)
                    AppState.activePotion = AppState.potions[randomNumber]
                    logger.log('the following potion is our active potion:', AppState.activePotion)
                }
                else if (card.type == 2) {
                    const randomNumber = Math.floor(Math.random() * 3)
                    logger.log('random number for type 1:', randomNumber)
                    AppState.activeJumpScare = AppState.jumpScares[randomNumber]
                    logger.log('the following potion is our active jump scare:', AppState.activeJumpScare)
                    this.playSound(randomNumber)
                }
            },

            playSound() {
                const sound = AppState.activeJumpScare.music
                var audio = new Audio(sound);
                logger.log('sound:', audio)
                if (sound) {
                    audio.play();
                }
            }
            // async play(){
            //     const audioElement = document.getElementById('audio')
            //     logger.log('here is our audio elem:', audioElement)
            //     audioElement.play()
            // }
        };
    },
    components: { TriviaCard }
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