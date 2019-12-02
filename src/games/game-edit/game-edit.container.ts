import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { routerActions } from 'connected-react-router';

import { RootState } from '../../store/root-state.interface';
import {
  getGameById,
  isGamesFetchPending,
  isGameUpdated,
  isUpdateGamePending,
} from '../../store/games/games.selectors';
import { deleteGame, fetchGames, updateGame } from '../../store/games/games.actions';
import { fetchPlatforms } from '../../store/platforms/platforms.actions';
import {
  getPlatformNameById,
  getPlatforms,
  isPlatformFetchPending,
} from '../../store/platforms/platforms.selectors';
import { Game } from '../../store/games/types/game.interface';
import { Routes } from '../../types/routes.enum';

import { GameEdit } from './GameEdit';

function mapStateToProps(state: RootState) {
  return {
    isFetchPending: isPlatformFetchPending(state) || isGamesFetchPending(state),
    isUpdatePending: isUpdateGamePending(state),
    isGameUpdated: isGameUpdated(state),
    getPlatformNameById: getPlatformNameById(state),
    getGameById: getGameById(state),
    platforms: getPlatforms(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchPlatforms: () => dispatch(fetchPlatforms()),
    updateGame: (game: Game) => dispatch(updateGame(game)),
    goBackToGames: () => dispatch(routerActions.push(Routes.games)),
    deleteGame: (game: Game) => dispatch(deleteGame(game)),
  };
}

export const GameEditContainer = withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(GameEdit),
);
