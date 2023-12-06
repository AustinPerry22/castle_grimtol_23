<template>
    <img class="map-img" src="../assets/img/map.png" alt="">
    <h1 class="title"> Scare St. </h1>
    <ScoreboardButton />

    <div class="position-relative">
        <div class="house1 btn" @click="goToHousePage(1, house1Locked)">1
            <!-- <img v-if="house1Locked" src="../assets/img/lock.png" alt="1" class="lock-img"> -->
            <img src="https://media3.giphy.com/media/wiwZ3kBPtrG6wYMNjw/giphy.gif?cid=6c09b952bkudwaf55l5px1ksankpvji0zba4f6ctk5gvqi9n&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="1" class="">
        </div>
        <div class="house2 btn" @click="goToHousePage(2, house2Locked)">2
            <img v-if="house2Locked" src="../assets/img/lock.png" alt="2" class="lock-img">
            <img src="https://media4.giphy.com/media/dOTLg5cVzgMap6na2l/200.webp?cid=ecf05e47qwf06g0dx80rj9th54tufrx7k6btouu1og4n9tvk&ep=v1_stickers_search&rid=200.webp&ct=s" alt="2" class="">
        </div>
        <div class="house3 btn" @click="goToHousePage(3, house3Locked)">3
            <img v-if="house3Locked" src="../assets/img/lock.png" alt="3" class="lock-img">
            <img src="https://media3.giphy.com/media/sDkA2qix4cnK5P8BUZ/200.webp?cid=ecf05e47howgjdzp6ovy3yskbx8p83d7mrqju3vv0qabhc2r&ep=v1_stickers_search&rid=200.webp&ct=s" alt="3" class="">
        </div>
        <div class="house4 btn" @click="goToHousePage(4, house4Locked)">4
            <img v-if="house4Locked" src="../assets/img/lock.png" alt="4" class="lock-img">
            <img src="https://media4.giphy.com/media/vWoRDgGYaZAqw5jzwR/200.webp?cid=ecf05e47yez34kroushgynwgzz015nbt4v43bzvq753gg3yo&ep=v1_stickers_search&rid=200.webp&ct=s" alt="4" class="">
        </div>
        <div class="house5 btn" @click="goToHousePage(5, house5Locked)">5
            <img v-if="house5Locked" src="../assets/img/lock.png" alt="5" class="lock-img">
            <img src="https://media0.giphy.com/media/6DOkW5jyFFdQVa5iQT/200.webp?cid=ecf05e47yez34kroushgynwgzz015nbt4v43bzvq753gg3yo&ep=v1_stickers_search&rid=200.webp&ct=s" alt="5" class="">
        </div>

    </div>
</template>
    
    
<script>
import { AppState } from '../AppState';
import { computed } from 'vue';
import { router } from '../router';
import ScoreboardButton from "../components/ScoreboardButton.vue";

export default {
    setup() {
        return {
            house1Locked: computed(() => AppState.house1Locked),
            house2Locked: computed(() => AppState.house2Locked),
            house3Locked: computed(() => AppState.house3Locked),
            house4Locked: computed(() => AppState.house4Locked),
            house5Locked: computed(() => AppState.house5Locked),
            goToHousePage(houseNumber, locked) {
                if (locked) {
                    // add trigger chains rattling sound
                    return
                }
                router.push({ name: "TriviaGrid" });
            }
        };
    },
    components: { ScoreboardButton }
};
</script>


<style lang="scss" scoped>
// img { border: 1px solid greenyellow;}
img{
    transition: .25s;
}
img:hover{
    transform: scale(105%);
    border-radius: 100%;
    box-shadow:
    0 0 25px 5px #80808080,
    0 0 75px 5px #80808080 inset;
}

.map-img {
    position: absolute;
    height: 100dvh;
    width: 100dvw;
    z-index: -2000;
}

.lock-img {
    position: inherit;
    height: 94%;
    width: 84%;
    border-radius: 8rem;
    z-index: 1;
}

.house1 {
    position: absolute;
    top: 42dvh;
    left: 5dvw;
}

.house2 {
    position: absolute;
    top: 10dvh;
    left: 10dvw;
}

.house3 {
    position: absolute;
    top: 37.5dvh;
    left: 35dvw;
}

.house4 {
    position: absolute;
    top: 60dvh;
    left: 67.5dvw;
}

.house5 {
    position: absolute;
    top: 2.5dvh;
    left: 55dvw;
}

.title {
    font-size: 70px;
    color: rgba(174, 10, 10, 0.734);
    font-family: 'Metal Mania';
}</style>