import { Selector } from 'react-redux';
import { createSelector } from 'reselect';

import { RootState } from '../root-state.interface';
import { ApiStatus } from '../../types/api-status.enum';
import { getProfile } from '../profile/profile.selectors';
import { Profile } from '../profile/types/profile.interface';

import { GamesState } from './types/games-state.interface';
import { Game } from './types/game.interface';

export const getGamesState: Selector<RootState, GamesState> = (state: RootState) => state.games;

export const getGames: Selector<RootState, Game[]> = (state: RootState) =>
  getGamesState(state).games;

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
  getGamesState(state).fetchStatus;

export const isGamesFetchPending: Selector<RootState, boolean> = createSelector(
  getFetchGamesApiStatus,
  (apiStatus: ApiStatus) => apiStatus === ApiStatus.pending,
);

export const getUpdateGamesApiStatus: Selector<RootState, ApiStatus> = (state: RootState) =>
  getGamesState(state).updateStatus;

export const isUpdateGamePending: Selector<RootState, boolean> = createSelector(
  getUpdateGamesApiStatus,
  (apiStatus: ApiStatus) => apiStatus === ApiStatus.pending,
);

export const isGameUpdated: Selector<RootState, boolean> = createSelector(
  getUpdateGamesApiStatus,
  (apiStatus: ApiStatus) => apiStatus === ApiStatus.complete,
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

export const getGameById = (state: RootState) => (id: number): Game | undefined => {
  return getGames(state).find(game => game.id === id);
};
