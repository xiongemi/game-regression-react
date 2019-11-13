import { AnyAction } from 'redux';

import { ProfileState } from '../types/profile-state.interface';
import { Profile } from '../types/profile.interface';

import { FETCH_PROFILE_SUCCESS } from './profile.actions';

export function profile(state: ProfileState = null, action: AnyAction): ProfileState {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return action.profile as Profile;
    default:
      return state;
  }
}
