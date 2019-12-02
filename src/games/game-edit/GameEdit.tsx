import React from 'react';
import { isEqual } from 'lodash-es';

import { CenteredCircularProgress } from '../../shared/CenteredCircularProgress';
import { Routes } from '../../types/routes.enum';

import { GameEditProps } from './game-edit.props';
import { GameEditState } from './game-edit-state.interface';
import { GameEditFormik } from './game-edit-form/game-edit-form.container';

export class GameEdit extends React.Component<GameEditProps, GameEditState> {
  constructor(props: any) {
    super(props);
    this.state = { game: undefined };
  }

  componentDidMount(): void {
    this.props.fetchGames();
    this.props.fetchPlatforms();
  }

  componentDidUpdate(): void {
    if (!this.props.isFetchPending && !this.state.game) {
      const id = parseInt(this.props.match.params.id);
      if (isNaN(id)) {
        this.props.history.push(Routes.games);
        return;
      }
      const game = this.props.getGameById(id);
      if (!isEqual(game, this.state.game)) {
        this.setState({ game });
      }
    }
  }

  render(): React.ReactNode {
    return !this.state.game ? (
      <CenteredCircularProgress />
    ) : (
      <GameEditFormik game={this.state.game} {...this.props} />
    );
  }
}
