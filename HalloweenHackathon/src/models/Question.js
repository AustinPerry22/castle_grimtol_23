import { Schema } from "mongoose";

export const QuestionSchema = new Schema({
  question: { type: String, required: true, maxLength: 300 },
  correctAnswer: { type: String, required: true, maxLength: 100 },
  incorrectAnswers: { type: Array, required: true },
  difficulty: { type: String, required: false, maxLength: 10 },
}
)