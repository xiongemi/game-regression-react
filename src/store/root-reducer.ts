import { combineReducers } from 'redux';

import { profileReducer } from './profile/profile.reducer';
import { RootState } from './root-state.interface';
import { gamesReducer } from './games/games.reducer';
import { platformsReducer } from './platforms/platforms.reducer';

export const rootReducer = combineReducers<RootState>({
  profile: profileReducer,
  games: gamesReducer,
  platforms: platformsReducer,
});
