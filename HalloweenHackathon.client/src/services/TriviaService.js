import { AppState } from "../AppState";
import { Card } from "../models/Card";
import { logger } from "../utils/Logger"
import { api } from "./AxiosService";

class TriviaService{
    generateCards(){
        let cardsArray = [0,0,0,0,0,0,1,2,2];
        for(let i=0; i < 9; i++)
            {
                const randomIndex = Math.floor(Math.random()*cardsArray.length)
                let splicedCard = cardsArray.splice(randomIndex, 1)
                AppState.triviaCards.push(new Card({"id": i, "type": splicedCard[0]}))
            }
    }

    async getQuestions(){
        const res = await api.get("api/questions")
        AppState.questions = res.data
    }

    getQuestion(card){
        const randomIndex = Math.floor(Math.random()*AppState.questions.length)
        const randomQuestion = AppState.questions[randomIndex]
        card.question = randomQuestion;
        AppState.triviaCards[card.id] = card
    }
}
export const triviaService = new TriviaService