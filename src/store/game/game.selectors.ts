import { Selector } from 'react-redux';
import { createSelector } from 'reselect';

import { RootState } from '../root-state.interface';
import { ApiStatus } from '../../types/api-status.enum';
import { getProfile } from '../../profile/store/profile.selectors';
import { Profile } from '../../profile/types/profile.interface';

import { GameState } from './types/game-state.interface';
import { Game } from './types/game.interface';

export const getGameState: Selector<RootState, GameState> = (state: RootState) => state.game;

export const getGames: Selector<RootState, Game[]> = (state: RootState) =>
  getGameState(state).games;

export const getUncompletedGames: Selector<RootState, Game[]> = createSelector(
  getGames,
  (games: Game[]) => games.filter(game => !game.isComplete),
);

export const getCompletedGames: Selector<RootState, Game[]> = createSelector(
  getGames,
  (games: Game[]) => games.filter(game => game.isComplete),
);

export const getUncompletedGamesCount: Selector<RootState, number> = createSelector(
  getUncompletedGames,
  uncompletedGames => uncompletedGames.length,
);

export const getCompletedGamesCount: Selector<RootState, number> = createSelector(
  getCompletedGames,
  completedGames => completedGames.length,
);

export const getUncompletedGamesProgress: Selector<RootState, number> = createSelector(
  getGames,
  getUncompletedGamesCount,
  (games: Game[], uncompletedGamesCount: number) => uncompletedGamesCount / games.length,
);

export const getCompletedGamesProgress: Selector<RootState, number> = createSelector(
  getGames,
  getCompletedGamesCount,
  (games: Game[], completedGamesCount: number) => completedGamesCount / games.length,
);

export const getFetchGamesApiStatus: Selector<RootState, ApiStatus> = (state: RootState) =>
  getGameState(state).fetchStatus;

export const isFetchGamesLoading: Selector<RootState, boolean> = createSelector(
  getFetchGamesApiStatus,
  (apiStatus: ApiStatus) => apiStatus === ApiStatus.pending,
);

export const getNumberOfDaysRemaining: Selector<RootState, number> = createSelector(
  getUncompletedGames,
  getProfile,
  (uncompletedGames: Game[], profile: Profile | null) => {
    if (!uncompletedGames.length || !profile || !profile.averageNumberOfHoursPerDay) {
      return 0;
    }
    return (
      uncompletedGames.reduce((totalHours, game) => totalHours + game.numberOfHoursToComplete, 0) /
      profile.averageNumberOfHoursPerDay
    );
  },
);
