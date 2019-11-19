import { Selector } from 'react-redux';

import { ProfileState } from '../types/profile-state.interface';
import { RootState } from '../../store/root-state.interface';
import { Profile } from '../types/profile.interface';

export const profileState: Selector<RootState, ProfileState> = (state: RootState) => state.profile;

export const getProfile: Selector<RootState, Profile | null> = (state: RootState) =>
  profileState(state).profile;
