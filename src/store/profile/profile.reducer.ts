import { AnyAction, combineReducers } from 'redux';

import { ApiStatus } from '../../types/api-status.enum';

import { Profile } from './types/profile.interface';
import {
  EDIT_PROFILE,
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE_SUCCESS,
  FETCH_PROFILE,
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_SUCCESS,
  RESET_EDIT_PROFILE_STATUS,
} from './profile.actions';

export function profile(state: Profile | null = null, action: AnyAction): Profile | null {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return action.profile;
    case EDIT_PROFILE_SUCCESS:
      return action.profile;
    default:
      return state;
  }
}

export function fetchStatus(state: ApiStatus = ApiStatus.notStarted, action: AnyAction): ApiStatus {
  switch (action.type) {
    case FETCH_PROFILE:
      return ApiStatus.pending;
    case FETCH_PROFILE_FAILED:
      return ApiStatus.error;
    case FETCH_PROFILE_SUCCESS:
      return ApiStatus.complete;
    default:
      return state;
  }
}

export function fetchError(state: any = null, action: AnyAction): any {
  switch (action.type) {
    case FETCH_PROFILE_FAILED:
      return action.error;
    case FETCH_PROFILE:
    case FETCH_PROFILE_SUCCESS:
      return null;
    default:
      return state;
  }
}

export function editStatus(state: ApiStatus = ApiStatus.notStarted, action: AnyAction): ApiStatus {
  switch (action.type) {
    case EDIT_PROFILE:
      return ApiStatus.pending;
    case EDIT_PROFILE_FAILED:
      return ApiStatus.error;
    case EDIT_PROFILE_SUCCESS:
      return ApiStatus.complete;
    case RESET_EDIT_PROFILE_STATUS:
      return ApiStatus.notStarted;
    default:
      return state;
  }
}

export function editError(state: any = null, action: AnyAction): any {
  switch (action.type) {
    case EDIT_PROFILE_FAILED:
      return action.error;
    case EDIT_PROFILE:
    case EDIT_PROFILE_SUCCESS:
      return null;
    default:
      return state;
  }
}

export const profileReducer = combineReducers({
  profile,
  fetchStatus,
  fetchError,
  editStatus,
  editError,
});
