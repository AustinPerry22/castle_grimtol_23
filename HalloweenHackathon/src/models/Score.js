import { Schema } from "mongoose";

export const ScoresSchema = new Schema(
    {
        name: {type: String, required: true},
        score: {type: Number, required: true}
    }
)