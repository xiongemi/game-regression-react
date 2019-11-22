import { Selector } from 'react-redux';

import { RootState } from '../root-state.interface';

import { Platform } from './types/platform.interface';
import { PlatformsState } from './types/platforms-state.interface';

export const getPlatformsState: Selector<RootState, PlatformsState> = (state: RootState) =>
  state.platforms;

export const getPlatforms: Selector<RootState, Platform[]> = (state: RootState) =>
  getPlatformsState(state).platforms;
