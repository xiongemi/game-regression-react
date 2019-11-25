import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Dispatch } from 'redux';

import { RootState } from '../../store/root-state.interface';
import { getGameById, isGamesFetchPending } from '../../store/games/games.selectors';
import { fetchGames } from '../../store/games/games.actions';
import { fetchPlatforms } from '../../store/platforms/platforms.actions';
import {
  getPlatformNameById,
  isPlatformFetchPending,
} from '../../store/platforms/platforms.selectors';

import { GameEdit } from './GameEdit';

function mapStateToProps(state: RootState) {
  return {
    isPending: isPlatformFetchPending(state) || isGamesFetchPending(state),
    getPlatformNameById: getPlatformNameById(state),
    getGameById: getGameById(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchPlatforms: () => dispatch(fetchPlatforms()),
  };
}

export const GameEditContainer = withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(GameEdit),
);
