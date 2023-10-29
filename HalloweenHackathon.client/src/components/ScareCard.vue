<template>
    <div class="row">
        <div class="col-12">
            <img class="scare-img" :src="jumpScare.img" alt="">
        </div>
        <audio :src="jumpScare.music"></audio>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
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
    min-width: 100vh;
    min-height: 100vh;
    z-index: 1200;
}
</style>