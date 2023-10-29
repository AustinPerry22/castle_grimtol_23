import { questionsService } from "../services/QuestionsService.js";
import BaseController from "../utils/BaseController.js";

export class QuestionsController extends BaseController {
  constructor() {
    super('api/questions')
    this.router
      .get('', this.getQuestions)
      .post('', this.createQuestion)
      .delete('/:questionId', this.removeQuestion)
  }

  async getQuestions(req, res, next) {
    try {
      const questions = await questionsService.getQuestions();
      return res.send(questions)
    } catch (error) {
      next(error)
    }
  }

  async createQuestion(req, res, next) {
    try {
      const newQuestion = await questionsService.createQuestion(req.body);
      return res.send(newQuestion)
    } catch (error) {
      next(error)
    }
  }

  async removeQuestion(req, res, next) {
    try {
      const deleted = await questionsService.removeQuestion(req.params.questionId);
      return res.send(deleted)
    } catch (error) {
      next(error)
    }
  }

}