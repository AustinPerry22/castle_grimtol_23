import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class ScoresService {

  async getScores() {
    const res = await api.get('api/scores');
    AppState.scores = res.data;
    logger.log('[SCORES SERVICE] getScores(): ', res.data)
  }
}

export const scoresService = new ScoresService();