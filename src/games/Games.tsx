import React from 'react';

import { CenteredCircularProgress } from '../shared/CenteredCircularProgress';

import { GamesList } from './games-list/games-list';
import { GamesProps } from './games-props.interface';

export class Games extends React.Component<GamesProps> {
  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchPlatforms();
  }

  render(): React.ReactNode {
    return this.props.isPending ? <CenteredCircularProgress /> : <GamesList {...this.props} />;
  }
}
