import { AppState } from "../AppState";
import { logger } from "../utils/Logger";

class CharacterService{
  setCharacter(character) {
    AppState.player.character = character;
    logger.log('[CHARACTER SERVICE] setCharacter(): ', character)
  }
    
  }
  
export const characterService = new CharacterService();