import { Selector } from 'react-redux';
import { createSelector } from 'reselect';

import { ProfileState } from '../types/profile-state.interface';
import { RootState } from '../../store/root-state.interface';
import { Profile } from '../types/profile.interface';
import { ApiStatus } from '../../types/api-status.enum';

export const getProfileState: Selector<RootState, ProfileState> = (state: RootState) =>
  state.profile;

export const getProfile: Selector<RootState, Profile | null> = (state: RootState) =>
  getProfileState(state).profile;

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
  getEditProfileError,
  (apiStatus: ApiStatus, error: any) => apiStatus === ApiStatus.complete && !error,
);

export const hasEditProfileFailed: Selector<RootState, boolean> = createSelector(
  getEditProfileApiStatus,
  getEditProfileError,
  (apiStatus: ApiStatus, error: any) => apiStatus === ApiStatus.complete && !!error,
);
