<template>
  <div class="container-fluid trivia-img">
    <section class="row">
      <div class="col-12 text-center">
        <h3 v-if="card && answers" class="text">
          {{ card.question.question }}
          <h5 @click="submitAnswer(answers[0])">{{ answers[0] }}</h5>
          <h5 @click="submitAnswer(answers[1])">{{ answers[1] }}</h5>
          <h5 @click="submitAnswer(answers[2])">{{ answers[2] }}</h5>
          <h5 @click="submitAnswer(answers[3])">{{ answers[3] }}</h5>
        </h3>
      </div>
    </section>
    <section class="row">
      <div class="col-6">
          
      </div>
      <div class="col-6">
        
        
        
  
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { triviaService } from '../services/TriviaService';
import { Card } from '../models/Card';
import { logger } from '../utils/Logger';
import { AppState } from "../AppState.js";
import Pop from '../utils/Pop';

export default {
  props: {card: {type: Card}},
setup(props) {
  onMounted(()=> getQuestion())
  function getQuestion(){
    triviaService.getQuestion(props.card)
    randomizeAnswers()
  }

  let answers = ref([])

  
  function randomizeAnswers(){
    let randomizedAnswers = []
    logger.log(props.card.question)
    answers.value.push(props.card.question.correctAnswer)
    props.card.question.incorrectAnswers.forEach(answer=>{
      answers.value.push(answer)
    })
    logger.log(answers)
    for(let i=0; i< 4; i++){
      const randomIndex = Math.floor(Math.random()*answers.value.length)
      let splicedAnswer = answers.value.splice(randomIndex, 1)
      randomizedAnswers.push(splicedAnswer[0])
    }
    answers.value = randomizedAnswers
  }

  return {
    answers,
    submitAnswer(answerId){
      if(answerId == props.card.question.correctAnswer) 
      {
        AppState.player.score++
        Pop.success("right answer")
      } 
      else{
        Pop.error("You are dead")
      }
    }
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
