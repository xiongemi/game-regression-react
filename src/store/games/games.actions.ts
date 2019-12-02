import { Game } from './types/game.interface';

export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';

export const UPDATE_GAME = 'UPDATE_GAME';
export const UPDATE_GAME_SUCCESS = 'UPDATE_GAME_SUCCESS';
export const UPDATE_GAME_FAILED = 'UPDATE_GAME_FAILED';

export const DELETE_GAME = 'DELETE_GAME';
export const DELETE_GAME_SUCCESS = 'DELETE_GAME_SUCCESS';
export const DELETE_GAME_FAILED = 'DELETE_GAME_FAILED';

export function fetchGames() {
  return { type: FETCH_GAMES };
}

export function fetchGamesSuccess(games: Game[]) {
  return { type: FETCH_GAMES_SUCCESS, games };
}

export function fetchGamesFailed(error: any) {
  return { type: FETCH_GAMES_FAILED, error };
}

export function updateGame(game: Game) {
  return { type: UPDATE_GAME, game };
}

export function updateGameSuccess(game: Game) {
  return { type: UPDATE_GAME_SUCCESS, game };
}

export function updateGameFailed(error: any) {
  return { type: UPDATE_GAME_FAILED, error };
}

export function deleteGame(game: Game) {
  return { type: DELETE_GAME, game };
}

export function deleteGameSuccess() {
  return { type: DELETE_GAME_SUCCESS };
}

export function deleteGameFailed(error: any) {
  return { type: DELETE_GAME_FAILED, error };
}
