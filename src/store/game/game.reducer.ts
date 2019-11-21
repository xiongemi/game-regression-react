import { AnyAction, combineReducers } from 'redux';

import { ApiStatus } from '../../types/api-status.enum';

import { Game } from './types/game.interface';
import { FETCH_GAMES, FETCH_GAMES_FAILED, FETCH_GAMES_SUCCESS } from './game.actions';

function games(state: Game[] = [], action: AnyAction): Game[] {
  switch (action.type) {
    case FETCH_GAMES_SUCCESS:
      return action.games;
    default:
      return state;
  }
}

function fetchStatus(state: ApiStatus = ApiStatus.notStarted, action: AnyAction): ApiStatus {
  switch (action.type) {
    case FETCH_GAMES:
      return ApiStatus.pending;
    case FETCH_GAMES_SUCCESS:
      return ApiStatus.error;
    case FETCH_GAMES_FAILED:
      return ApiStatus.complete;
    default:
      return state;
  }
}

export const gameReducer = combineReducers({
  games,
  fetchStatus,
});
