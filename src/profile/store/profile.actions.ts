import { AnyAction } from 'redux';

import { Profile } from '../types/profile.interface';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILED = 'FETCH_PROFILE_FAILED';

export function fetchProfile(): AnyAction {
  return { type: FETCH_PROFILE };
}
export function fetchProfileSuccess(profile: Profile): AnyAction {
  return { type: FETCH_PROFILE_SUCCESS, profile };
}

export function fetchProfileFailed(error: any): AnyAction {
  return { type: FETCH_PROFILE_FAILED, error };
}
