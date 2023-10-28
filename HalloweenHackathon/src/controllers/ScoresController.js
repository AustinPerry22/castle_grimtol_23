import { scoresService } from "../services/ScoresService.js";
import BaseController from "../utils/BaseController.js";

export class ScoresController extends BaseController {
    constructor() {
        super('api/scores')
        this.router
            .get('', this.getScores)
            .post('', this.postScore)
            .delete('/:scoreId', this.removeScore)
    }

    async getScores(req, res, next) {
        try {
            const scores = await scoresService.getScores()
            res.send(scores)
        } catch (error) {
            next(error)
        }
    }

    async postScore(req, res, next) {
        try {
            const score = await scoresService.postScore(req.body)
            res.send(score)
        } catch (error) {
            next(error)
        }
    }

    async removeScore(req, res, next) {
        try {
            const score = await scoresService.removeScore(req.params.scoreId)
            res.send(score)
        } catch (error) {
            next(error)
        }
    }
}