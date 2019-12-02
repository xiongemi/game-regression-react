import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { routerActions } from 'connected-react-router';

import { RootState } from '../../store/root-state.interface';
import { getGameById, isGamesFetchPending } from '../../store/games/games.selectors';
import { fetchGames, updateGame } from '../../store/games/games.actions';
import { fetchPlatforms } from '../../store/platforms/platforms.actions';
import {
  getPlatformNameById,
  getPlatforms,
  isPlatformFetchPending,
} from '../../store/platforms/platforms.selectors';
import { Game } from '../../store/games/types/game.interface';

import { GameEdit } from './GameEdit';
import { Routes } from '../../types/routes.enum';

function mapStateToProps(state: RootState) {
  return {
    isPending: isPlatformFetchPending(state) || isGamesFetchPending(state),
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
    goBackToGames: () => dispatch(routerActions.push(Routes.games))
  };
}

export const GameEditContainer = withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(GameEdit),
);
