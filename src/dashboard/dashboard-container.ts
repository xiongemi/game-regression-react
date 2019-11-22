import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { RootState } from '../store/root-state.interface';
import {
  getCompletedGamesCount,
  getCompletedGamesProgress,
  getNumberOfDaysRemaining,
  getUncompletedGamesCount,
  getUncompletedGamesProgress,
  isFetchGamesLoading,
} from '../store/games/games.selectors';
import { fetchGames } from '../store/games/games.actions';

import { Dashboard } from './Dashboard';

function mapStateToProps(state: RootState) {
  return {
    uncompletedGamesProgress: getUncompletedGamesProgress(state),
    completeGamesProgress: getCompletedGamesProgress(state),
    uncompletedGamesCount: getUncompletedGamesCount(state),
    completeGamesCount: getCompletedGamesCount(state),
    isPending: isFetchGamesLoading(state),
    numberOfDaysRemaining: getNumberOfDaysRemaining(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchGames: () => dispatch(fetchGames()),
  };
}

const DashboardContainer: any = withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard),
);

export default DashboardContainer;
