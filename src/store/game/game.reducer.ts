import { AnyAction, combineReducers } from 'redux';

import { Game } from './types/game.interface';
import { FETCH_GAMES_SUCCESS } from './game.actions';

export function games(state: Game[] = [], action: AnyAction): Game[] {
  switch (action.type) {
    case FETCH_GAMES_SUCCESS:
      return action.games;
    default:
      return state;
  }
}

export const gameReducer = combineReducers({
  games,
});
