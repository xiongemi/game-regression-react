import { AnyAction } from 'redux';

import { Profile } from './types/profile.interface';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILED = 'FETCH_PROFILE_FAILED';

export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILED = 'EDIT_PROFILE_FAILED';
export const RESET_EDIT_PROFILE_STATUS = 'RESET_EDIT_PROFILE_STATUS';

export function fetchProfile(): AnyAction {
  return { type: FETCH_PROFILE };
}
export function fetchProfileSuccess(profile: Profile): AnyAction {
  return { type: FETCH_PROFILE_SUCCESS, profile };
}

export function fetchProfileFailed(error: any): AnyAction {
  return { type: FETCH_PROFILE_FAILED, error };
}

export function editProfile(profile: Profile): AnyAction {
  return { type: EDIT_PROFILE, profile };
}

export function editProfileSuccess(profile: Profile): AnyAction {
  return { type: EDIT_PROFILE_SUCCESS, profile };
}

export function editProfileFailed(error: any): AnyAction {
  return { type: EDIT_PROFILE_FAILED, error };
}

export function resetEditProfileStatus(): AnyAction {
  return { type: RESET_EDIT_PROFILE_STATUS };
}
