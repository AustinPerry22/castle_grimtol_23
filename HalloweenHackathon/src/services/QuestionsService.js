import { dbContext } from "../db/DbContext.js";

class QuestionsService {

  async getQuestions() {
    const questions = await dbContext.Questions.find()
    return questions
  }

  async createQuestion(body) {
    if (Array.isArray(body)) {
      let newQuestions = [];
      await body.forEach(async entry => {
        const newQuestion = await dbContext.Questions.create(entry);
        newQuestions.push(newQuestion);
      })
      return newQuestions
    }
    const newQuestion = await dbContext.Questions.create(body)
    return newQuestion
  }

}

export const questionsService = new QuestionsService();