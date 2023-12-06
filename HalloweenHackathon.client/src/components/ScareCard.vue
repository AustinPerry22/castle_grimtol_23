<template>
    <div class="row">
        <div class="col-12">
            <img class="scare-img img-fluid" :src="jumpScare.img" alt="">
        </div>
        <audio :src="jumpScare.music"></audio>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed } from 'vue';
export default {
    setup(){
    return {  
        jumpScare: computed(()=> AppState.activeJumpScare)
    }
    }
};
</script>


<style lang="scss" scoped>
.scare-img{
    max-width: 30vh;
    max-height: 30vh;
    z-index: 1200;
}
</style>