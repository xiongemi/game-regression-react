import { ProfileState } from '../profile/types/profile-state.interface';

import { GameState } from './game/types/game-state.interface';

export interface RootState {
  profile: ProfileState;
  game: GameState;
}
