<template>
<img class="map-img" src="../assets/img/map.png" alt="">
<h1 class="title">
    Scare St.
</h1>
<img src="https://media3.giphy.com/media/wiwZ3kBPtrG6wYMNjw/giphy.gif?cid=6c09b952bkudwaf55l5px1ksankpvji0zba4f6ctk5gvqi9n&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" class="house1">
<img src="../assets/img/lock.png" alt="" class="house5 lock-img">
<img src="https://media4.giphy.com/media/TWCf83eMB06aHrBDNC/200w.gif?cid=6c09b9522wdfv6nczxilulxl8od0ci89z6llvtgldzdljc2c&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" class="house2">
<img src="https://media3.giphy.com/media/wiwZ3kBPtrG6wYMNjw/giphy.gif?cid=6c09b952bkudwaf55l5px1ksankpvji0zba4f6ctk5gvqi9n&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" class="house3">
<img src="https://media3.giphy.com/media/wiwZ3kBPtrG6wYMNjw/giphy.gif?cid=6c09b952bkudwaf55l5px1ksankpvji0zba4f6ctk5gvqi9n&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" class="house4">
<img src="https://media3.giphy.com/media/wiwZ3kBPtrG6wYMNjw/giphy.gif?cid=6c09b952bkudwaf55l5px1ksankpvji0zba4f6ctk5gvqi9n&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" class="house5">
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
.lock-img{
    width: 15%;
    height: 30%;
    border-radius: 5rem;
    z-index: 1;
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