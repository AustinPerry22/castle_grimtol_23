<template>
  <div class="container trivia-img">
    <section class="row">
      <div class="col-12 text-center">
        <h1 class="text">
          Answer Wisely....
        </h1>
      </div>
    </section>
    <section class="row">
      <div class="col-6">
        <div class="row">
          Question 1
        </div>
        <div class="row">
          Question 2
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          Question 3
        </div>
        <div class="row">
          Question 4
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
setup() {
  return {};
},
};
</script>


<style>
.text{
  font-family: 'Metal Mania';
}

.trivia-img{
  background-image: url('https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb29reXxlbnwwfHwwfHx8MA%3D%3D');
  background-position: center;
  background-size: cover;
  /* background-color: red; */
  border-radius: 10px;
  height: 30vh;
  width: 62vh;
}
</style>
