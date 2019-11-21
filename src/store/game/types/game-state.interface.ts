import { ApiStatus } from '../../../types/api-status.enum';

import { Game } from './game.interface';

export interface GameState {
  games: Game[];
  fetchStatus: ApiStatus;
}
