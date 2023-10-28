<template>
<img class="map-img" src="../assets/img/map.png" alt="">
<h1 class="title">
    Scare St.
</h1>
<img src="https://media3.giphy.com/media/wiwZ3kBPtrG6wYMNjw/giphy.gif?cid=6c09b952bkudwaf55l5px1ksankpvji0zba4f6ctk5gvqi9n&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" class="house1">
<img src="https://media4.giphy.com/media/dOTLg5cVzgMap6na2l/200.webp?cid=ecf05e47qwf06g0dx80rj9th54tufrx7k6btouu1og4n9tvk&ep=v1_stickers_search&rid=200.webp&ct=s" alt="" class="house2">
<img src="https://media3.giphy.com/media/sDkA2qix4cnK5P8BUZ/200.webp?cid=ecf05e47howgjdzp6ovy3yskbx8p83d7mrqju3vv0qabhc2r&ep=v1_stickers_search&rid=200.webp&ct=s" alt="" class="house3">
<img src="https://media4.giphy.com/media/vWoRDgGYaZAqw5jzwR/200.webp?cid=ecf05e47yez34kroushgynwgzz015nbt4v43bzvq753gg3yo&ep=v1_stickers_search&rid=200.webp&ct=s" alt="" class="house4">
<img src="https://media0.giphy.com/media/6DOkW5jyFFdQVa5iQT/200.webp?cid=ecf05e47yez34kroushgynwgzz015nbt4v43bzvq753gg3yo&ep=v1_stickers_search&rid=200.webp&ct=s" alt="" class="house5">
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup(){
    return {  }
    }
};
</script>


<style lang="scss" scoped>
.map-img{
    position: absolute;
    height: 100dvh;
    width: 100dvw;
    z-index: -2000;
}
.house1{
    position: absolute;
    top: 45dvh;
    left: 5dvw;
}
.house2{
    position: absolute;
    border-radius: 5rem;
    width: 12.5dvw;
    top: 10dvh;
    left: 10dvw;
}
.house3{
    position: absolute;
    top: 37.5dvh;
    left: 35dvw;
}
.house4{
    position: absolute;
    top: 60dvh;
    left: 67.5dvw;
}
.house5{
    position: absolute;
    top: 2.5dvh;
    left: 55dvw;
}
.title{
    font-size: 70px;
    color: rgba(174, 10, 10, 0.734);
    font-family: 'Metal Mania';
  }
</style>