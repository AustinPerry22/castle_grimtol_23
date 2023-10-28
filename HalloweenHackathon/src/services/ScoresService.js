import { dbContext } from "../db/DbContext.js"

class ScoresService {
    async getScores() {
        let scores = await dbContext.Score.find()
        scores = scores.sort((a, b) => b.score - a.score)
        return scores
    }
    async postScore(body) {
        const score = await dbContext.Score.create(body)
        return score
    }

    async removeScore(scoreId) {
        const score = await dbContext.Score.remove({ _id: scoreId })
        return score
    }

}

export const scoresService = new ScoresService()