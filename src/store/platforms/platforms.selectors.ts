import { Selector } from 'react-redux';
import { createSelector } from 'reselect';

import { RootState } from '../root-state.interface';
import { ApiStatus } from '../../types/api-status.enum';

import { Platform } from './types/platform.interface';
import { PlatformsState } from './types/platforms-state.interface';

export const getPlatformsState: Selector<RootState, PlatformsState> = (state: RootState) =>
  state.platforms;

export const getPlatforms: Selector<RootState, Platform[]> = (state: RootState) =>
  getPlatformsState(state).platforms;

export const getPlatformsFetchStatus: Selector<RootState, ApiStatus> = (state: RootState) =>
  getPlatformsState(state).fetchStatus;

export const isPlatformFetchPending: Selector<RootState, boolean> = createSelector(
  getPlatformsFetchStatus,
  (fetchStatus: ApiStatus) => fetchStatus === ApiStatus.pending,
);

export const getPlatformById = (state: RootState) => (id: number): Platform | undefined => {
  return getPlatforms(state).find(platform => platform.id === id);
};

export const getPlatformNameById = (state: RootState) => (id: number): string => {
  const platform = getPlatformById(state)(id);
  return platform ? platform.name : '';
};
