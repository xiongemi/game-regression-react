import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { profileReducer } from './profile/profile.reducer';
import { RootState } from './root-state.interface';
import { gamesReducer } from './games/games.reducer';
import { platformsReducer } from './platforms/platforms.reducer';

export const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    profile: profileReducer,
    games: gamesReducer,
    platforms: platformsReducer,
    router: connectRouter(history),
  });
