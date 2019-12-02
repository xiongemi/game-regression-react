import React from 'react';
import { ButtonBase, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { createRouterLinkForward } from '../../shared/create-router-link-forward.util';
import { Routes } from '../../types/routes.enum';

import { GameCardProps } from './game-card-props.interface';
import {
  getGameStatus,
  getCardBackgroundColor,
  getProgress,
  getCompleteDate,
  getCardIcon,
} from './game-card.utils';

export class GamesCard extends React.Component<GameCardProps> {
  render(): React.ReactNode {
    const gameStatus = getGameStatus(this.props);

    return (
      <Card className={getCardBackgroundColor(gameStatus) + ' h-100'}>
        <ButtonBase
          component={createRouterLinkForward(Routes.gamesEdit + '/' + this.props.id)}
          className="h-100 w-100"
        >
          <CardContent className="ml2 bg-blue text-light h-100 w-100">
            <div className="f4 b flex items-center">
              {getCardIcon(gameStatus)} <span className="ml2"> {this.props.name} </span>
            </div>
            <Typography variant="body2" gutterBottom={true}>
              {this.props.platformName}
            </Typography>
            <Typography variant="body2" gutterBottom={true}>
              <span className="b">{this.props.t('estCompleted')} :</span> {getProgress(this.props)}%
            </Typography>
            <Typography variant="body2" gutterBottom={true}>
              <span className="b">{this.props.t('completionDate')} :</span>{' '}
              {getCompleteDate(this.props)}
            </Typography>
          </CardContent>
          <CardMedia
            className="w4 h-100 ml-auto self-end"
            image={this.props.image}
            title={this.props.name}
          />
        </ButtonBase>
      </Card>
    );
  }
}
