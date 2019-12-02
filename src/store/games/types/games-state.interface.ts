import { ApiStatus } from '../../../types/api-status.enum';

import { Game } from './game.interface';

export interface GamesState {
  games: Game[];
  fetchStatus: ApiStatus;
  updateStatus: ApiStatus;
}
