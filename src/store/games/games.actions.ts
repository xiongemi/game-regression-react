import { Game } from './types/game.interface';

export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';

export function fetchGames() {
  return { type: FETCH_GAMES };
}

export function fetchGamesSuccess(games: Game[]) {
  return { type: FETCH_GAMES_SUCCESS, games };
}

export function fetchGamesFailed(error: any) {
  return { type: FETCH_GAMES_FAILED, error };
}
