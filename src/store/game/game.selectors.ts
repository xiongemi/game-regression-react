import { Selector } from 'react-redux';

import { RootState } from '../root-state.interface';

import { GameState } from './types/game-state.interface';

export const getGameState: Selector<RootState, GameState> = (state: RootState) => state.game;
