import { Selector } from 'react-redux';

import { ProfileState } from '../types/profile-state.interface';
import { RootState } from '../../store/root-state.interface';

export const profileState: Selector<RootState, ProfileState> = (state: RootState) => state.profile;
