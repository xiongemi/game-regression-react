import { AnyAction, combineReducers } from 'redux';

import { ApiStatus } from '../../types/api-status.enum';

import { Platform } from './types/platform.interface';
import {
  FETCH_PLATFORMS,
  FETCH_PLATFORMS_FAILED,
  FETCH_PLATFORMS_SUCCESS,
} from './platforms.actions';

export function platforms(state: Platform[] = [], action: AnyAction): Platform[] {
  switch (action.type) {
    case FETCH_PLATFORMS_SUCCESS:
      return action.platforms;
    default:
      return state;
  }
}

function fetchStatus(state: ApiStatus = ApiStatus.notStarted, action: AnyAction): ApiStatus {
  switch (action.type) {
    case FETCH_PLATFORMS:
      return ApiStatus.pending;
    case FETCH_PLATFORMS_SUCCESS:
      return ApiStatus.error;
    case FETCH_PLATFORMS_FAILED:
      return ApiStatus.complete;
    default:
      return state;
  }
}

export const platformsReducer = combineReducers({
  platforms,
  fetchStatus,
});
