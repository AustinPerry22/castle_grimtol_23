<template>
    <div class="row">
        <div class="col-12">
            <img :src="jumpScare.img" alt="">
        </div>
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

</style>