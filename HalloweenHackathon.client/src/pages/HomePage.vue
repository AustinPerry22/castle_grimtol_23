<template>
  <div class="background-img">

    <div class="container">
      <div class="row">
        <div class="col-12 text-center text-light mb-5">
          <h1 class="title">
            Scare St.
          </h1>
        </div>
      </div>
      <div class="row text-light justify-content-center">
        <div class="col-10 text-center">
          <h3>
            Welcome...... to the SPOOKIEST game this Halloween! Get ready for frights and flights as you make your way to the end of Scare Street! Answer SPOOKY questions and make your way through each house on Scare Street. FINISH THIS....
          </h3>
        </div>
    </div>
    <div class="row justify-content-center mt-5">
      <img class="gif" src="https://media3.giphy.com/media/fnfONXQS7MmHi2AcsJ/giphy.gif?cid=6c09b9523lg0s79ahctz7nkyihv2m6piypbb2rv8fmas3tlr&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="">
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-2">
        <router-link :to="{path: 'character-select'}">
        <button class="enter-button">
          Enter... At your own peril..
        </button>
      </router-link>
      <div>
          <router-link :to="{ path: '/test' }">
            <button>
              Test Page
            </button>
          </router-link>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .background-img{
    background-image: url('https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    height: 100vh;
  }

  .gif{
    max-height: 50vh;
    max-width: 50vh;
  }

  .title{
    font-size: 70px;
    color: rgba(174, 10, 10, 0.734);
    font-family: 'Metal Mania';
  }

  .enter-button{
    border-radius: 10px;
    background-color: rgba(174, 10, 10, 0.734);
  }

  .enter-button:hover{
    transform: scale(1.1);
    // transition: 0.5s ease-in;
    transition: 0.5s ease-out;
  }
</style>
