import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ScoresSchema } from '../models/Score.js';


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Score = mongoose.model('Score', ScoresSchema);
}

export const dbContext = new DbContext()
