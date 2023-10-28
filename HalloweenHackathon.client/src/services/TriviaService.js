import { AppState } from "../AppState";
import { logger } from "../utils/Logger"

class TriviaService{
    generateCards(){
        let cardsArray = [0,0,0,0,0,0,1,2,2];
        let newCardsArray = [];
        for(let i=0; i < 9; i++)
            {
                const randomIndex = Math.floor(Math.random()*cardsArray.length)
                let splicedCard = cardsArray.splice(randomIndex, 1)
                newCardsArray.push(splicedCard[0])
            }
        AppState.triviaCards = newCardsArray
    }
}
export const triviaService = new TriviaService