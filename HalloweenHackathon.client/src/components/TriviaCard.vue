<template>
  <div class="container-fluid trivia-img">
    <section class="row">
      <div class="col-12 text-center">
        <h4 v-if="card && answers" class="text pt-3">
          {{ card.question.question }}
          <hr>
          <h5 :disabled="card.guessed" @click="submitAnswer(answers[0])" type="button">{{ answers[0] }}</h5>
          <h5 :disabled="card.guessed" @click="submitAnswer(answers[1])" type="button">{{ answers[1] }}</h5>
          <h5 :disabled="card.guessed" @click="submitAnswer(answers[2])" type="button">{{ answers[2] }}</h5>
          <h5 :disabled="card.guessed" @click="submitAnswer(answers[3])" type="button">{{ answers[3] }}</h5>
        </h4>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { triviaService } from '../services/TriviaService';
import { Card } from '../models/Card';
import { logger } from '../utils/Logger';
import { AppState } from "../AppState.js";
import Pop from '../utils/Pop';
import { useRouter } from "vue-router";

export default {
  props: {card: {type: Card}},
setup(props) {
  onMounted(() => getQuestion())
  
  function getQuestion(){
    triviaService.getQuestion(props.card)
    randomizeAnswers()
  }

  let answers = ref([]);
  const router = useRouter();
  
  function randomizeAnswers(){
    let randomizedAnswers = []
    logger.log(props.card.question)
    answers.value.push(props.card.question.correctAnswer)
    props.card.question.incorrectAnswers.forEach(answer=>{
      answers.value.push(answer)
    })
    logger.log(answers.value)
    for(let i=0; i< 4; i++){
      const randomIndex = Math.floor(Math.random()*answers.value.length)
      let splicedAnswer = answers.value.splice(randomIndex, 1)
      randomizedAnswers.push(splicedAnswer[0])
    }
    answers.value = randomizedAnswers
  }

  return {
    answers,
    correctAnswers: computed(()=> AppState.activeCorrect),

    submitAnswer(answerId){
      if(answerId == props.card.question.correctAnswer && !props.card.guessed) 
      {
        AppState.player.score++
        this.correctAnswers++
        props.card.guessed = true;
        Pop.success("Correct!")
        if (this.correctAnswers> 4) {
          this.correctAnswers = 0;
          router.push({name:'Scoreboard'})
        }
      } 
      else if(!props.card.guessed){
        props.card.guessed = true;
        Pop.error("Sorry, wrong answer")
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
