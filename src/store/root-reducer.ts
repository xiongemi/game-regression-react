import { combineReducers } from 'redux';

import { profile } from '../profile/store/profile.reducer';

import { RootState } from './root-state.interface';

export const rootReducer = combineReducers<RootState>({
  profile: profile,
});
