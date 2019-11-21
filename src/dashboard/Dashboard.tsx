import React from 'react';
import { LinearProgress, Paper, Typography } from '@material-ui/core';

import { CenteredCircularProgress } from '../shared/CenteredCircularProgress';

import { DashboardProps } from './dashboard-props.interface';

import './Dashboard.css';

export class Dashboard extends React.Component<DashboardProps> {
  componentDidMount() {
    this.props.fetchGames();
  }

  render(): React.ReactNode {
    return this.props.isPending ? (
      <CenteredCircularProgress />
    ) : (
      <React.Fragment>
        <Paper className="ma3 pa3">
          <Typography variant="h6">{this.props.t('yourDashboard')}</Typography>
        </Paper>
        <Paper className="ma3 pa3">
          <div className="f4">
            <span className="b">{this.props.t('timeRemaining')}: </span>
            {this.props.numberOfDaysRemaining} {this.props.t('days')}
          </div>
          <div className="f5 mt3 mb2">
            <span className="b">{this.props.t('numberOfUnfinishedGames')}: </span>
            {this.props.uncompletedGamesCount}
          </div>
          <LinearProgress
            variant="determinate"
            classes={{ root: 'bg-light-red', bar: 'bg-red' }}
            className="h-progress"
            value={this.props.uncompletedGamesProgress * 100}
          />
          <div className="f5 mt3 mb2">
            <span className="b">{this.props.t('numberOfFinishedGames')}: </span>
            {this.props.completeGamesCount}
          </div>
          <LinearProgress
            variant="determinate"
            classes={{ root: 'bg-light-green', bar: 'bg-green' }}
            className="h-progress"
            value={this.props.completeGamesProgress * 100}
          />
        </Paper>
      </React.Fragment>
    );
  }
}
