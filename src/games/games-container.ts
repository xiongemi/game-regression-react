import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Dispatch } from 'redux';

import { RootState } from '../store/root-state.interface';
import { getGames, isGamesFetchPending } from '../store/games/games.selectors';
import { fetchGames } from '../store/games/games.actions';
import { fetchPlatforms } from '../store/platforms/platforms.actions';
import {
  getPlatformNameById,
  isPlatformFetchPending,
} from '../store/platforms/platforms.selectors';
import { getAverageNumberOfHoursPerDay } from '../store/profile/profile.selectors';

import { Games } from './Games';

function mapStateToProps(state: RootState) {
  return {
    isPending: isPlatformFetchPending(state) || isGamesFetchPending(state),
    games: getGames(state),
    getPlatformNameById: getPlatformNameById(state),
    averageHoursPerDay: getAverageNumberOfHoursPerDay(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchPlatforms: () => dispatch(fetchPlatforms()),
  };
}

const GamesContainer = withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Games));

export default GamesContainer;
