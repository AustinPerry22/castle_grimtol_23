import { dbContext } from "../db/DbContext.js";

class QuestionsService {

  async getQuestions() {
    const questions = await dbContext.Questions.find()
    return questions
  }

  async createQuestion(body) {
    const newQuestion = await dbContext.Questions.create(body)
    return newQuestion
  }

}

export const questionsService = new QuestionsService();