import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Dispatch } from 'redux';

import { RootState } from '../store/root-state.interface';
import { getGames, isFetchGamesLoading } from '../store/games/games.selectors';
import { fetchGames } from '../store/games/games.actions';
import { fetchPlatforms } from '../store/platforms/platforms.actions';
import { getPlatforms } from '../store/platforms/platforms.selectors';
import { getAverageNumberOfHoursPerDay } from '../store/profile/profile.selectors';

import { Games } from './Games';

function mapStateToProps(state: RootState) {
  return {
    isPending: isFetchGamesLoading(state),
    games: getGames(state),
    getPlatformNameById: (id: number): string => {
      const platform = getPlatforms(state).find(platform => platform.id === id);
      return platform ? platform.name : '';
    },
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
