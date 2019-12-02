import { RouterState } from 'connected-react-router';

import { ProfileState } from './profile/types/profile-state.interface';
import { GamesState } from './games/types/games-state.interface';
import { PlatformsState } from './platforms/types/platforms-state.interface';

export interface RootState {
  profile: ProfileState;
  games: GamesState;
  platforms: PlatformsState;
  router: RouterState;
}
