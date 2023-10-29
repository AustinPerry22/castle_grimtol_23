<template>
  <div class="container-fluid trivia-img">
    <section class="row">
      <div class="col-12 text-center">
        <h1 v-if="card" class="text">
          {{ card.question.question }}
        </h1>
      </div>
    </section>
    <section class="row">
      <div class="col-6">
        <div class="row">
          {{ answers[0] }}
        </div>
        <div class="row">
          {{ answers[1] }}
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          {{ answers[2] }}
        </div>
        <div class="row">
          {{ answers[3] }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { triviaService } from '../services/TriviaService';
import { Card } from '../models/Card';
import { logger } from '../utils/Logger';

export default {
  props: {card: {type: Card}},
setup(props) {
  onMounted(()=> getQuestion())
  function getQuestion(){
    triviaService.getQuestion(props.card)
    randomizeAnswers()
  }
  let answers = []
  function randomizeAnswers(){
    let randomizedAnswers = []
    logger.log(props.card.question)
    answers.push(props.card.question.correctAnswer)
    props.card.question.incorrectAnswers.forEach(answer=>{
      answers.push(answer)
    })
    logger.log(answers)
    answers.forEach(answer=>{
      const randomIndex = Math.floor(Math.random()*answers.length)
      let splicedAnswer = answers.splice(randomIndex, 1)
      randomizedAnswers.push(splicedAnswer[0])
    })
    answers = randomizedAnswers
  }

  return {
    answers
  };
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
}
</style>
