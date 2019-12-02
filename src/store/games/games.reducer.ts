import { AnyAction, combineReducers } from 'redux';

import { ApiStatus } from '../../types/api-status.enum';

import { Game } from './types/game.interface';
import {
  FETCH_GAMES,
  FETCH_GAMES_FAILED,
  FETCH_GAMES_SUCCESS,
  UPDATE_GAME,
  UPDATE_GAME_FAILED,
  UPDATE_GAME_SUCCESS,
} from './games.actions';

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
      return ApiStatus.complete;
    case FETCH_GAMES_FAILED:
      return ApiStatus.error;
    default:
      return state;
  }
}

function updateStatus(state: ApiStatus = ApiStatus.notStarted, action: AnyAction): ApiStatus {
  switch (action.type) {
    case UPDATE_GAME:
      return ApiStatus.pending;
    case UPDATE_GAME_SUCCESS:
      return ApiStatus.complete;
    case UPDATE_GAME_FAILED:
      return ApiStatus.error;
    default:
      return state;
  }
}

export const gamesReducer = combineReducers({
  games,
  fetchStatus,
  updateStatus,
});
