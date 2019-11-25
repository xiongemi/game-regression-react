import React from 'react';
import { isEqual } from 'lodash-es';

import { CenteredCircularProgress } from '../../shared/CenteredCircularProgress';
import { Routes } from '../../types/routes.enum';

import { GameEditPropsInterface } from './game-edit-props.interface';
import { GameEditState } from './game-edit-state.interface';

export class GameEdit extends React.Component<GameEditPropsInterface, GameEditState> {
  constructor(props: any) {
    super(props);
    this.state = { game: undefined };
  }

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchPlatforms();
  }

  componentDidUpdate(prevProps: GameEditPropsInterface): void {
    if (!this.props.isPending) {
      const id = parseInt(this.props.match.params.id);
      if (isNaN(id)) {
        this.props.history.push(Routes.games);
        return;
      }
      const prevGame = prevProps.getGameById(id);
      const game = this.props.getGameById(id);
      if (!isEqual(game, prevGame)) {
        this.setState({ game });
      }
    }
  }

  render(): React.ReactNode {
    return this.props.isPending || !this.state.game ? (
      <CenteredCircularProgress />
    ) : (
      <div>{this.state.game.id}</div>
    );
  }
}
