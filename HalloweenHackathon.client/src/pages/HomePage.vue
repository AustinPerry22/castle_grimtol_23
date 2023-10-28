<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>
          Project Name Here
        </h1>
      </div>
    </div>
    <div class="row">
      Welcome..... to the SPOOKIEST game of this year's Halloween! Be 
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
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
