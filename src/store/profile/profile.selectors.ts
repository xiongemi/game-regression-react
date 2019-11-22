import { Selector } from 'react-redux';
import { createSelector } from 'reselect';

import { RootState } from '../../store/root-state.interface';
import { ApiStatus } from '../../types/api-status.enum';

import { ProfileState } from './types/profile-state.interface';
import { Profile } from './types/profile.interface';

export const getProfileState: Selector<RootState, ProfileState> = (state: RootState) =>
  state.profile;

export const getProfile: Selector<RootState, Profile | null> = (state: RootState) =>
  getProfileState(state).profile;

export const getAverageNumberOfHoursPerDay: Selector<RootState, number> = (state: RootState) => {
  const profile = getProfile(state);
  return profile ? profile.averageNumberOfHoursPerDay : 0;
};

export const getEditProfileApiStatus: Selector<RootState, ApiStatus> = (state: RootState) =>
  getProfileState(state).editStatus;

export const getEditProfileError: Selector<RootState, any> = (state: RootState) =>
  getProfileState(state).editError;

export const isEditProfilePending: Selector<RootState, boolean> = createSelector(
  getEditProfileApiStatus,
  (apiStatus: ApiStatus) => apiStatus === ApiStatus.pending,
);

export const isEditProfileSaved: Selector<RootState, boolean> = createSelector(
  getEditProfileApiStatus,
  (apiStatus: ApiStatus) => apiStatus === ApiStatus.complete,
);

export const hasEditProfileFailed: Selector<RootState, boolean> = createSelector(
  getEditProfileApiStatus,
  (apiStatus: ApiStatus) => apiStatus === ApiStatus.error,
);
