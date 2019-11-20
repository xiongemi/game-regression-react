import { combineReducers } from 'redux';

import { profileReducer } from '../profile/store/profile.reducer';

import { RootState } from './root-state.interface';
import { gameReducer } from './game/game.reducer';

export const rootReducer = combineReducers<RootState>({
  profile: profileReducer,
  game: gameReducer,
});
