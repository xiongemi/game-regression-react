import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import { GamesProps } from '../games-props.interface';
import { GamesCard } from '../game-card/GameCard';

export class GamesList extends React.Component<GamesProps> {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <Paper className="ma3 pa3 bg-blue text-light">
          <Typography variant="h6">{this.props.t('gamesOwned')}</Typography>
        </Paper>
        <Grid container spacing={3} className="pa3">
          {this.props.games.map(game => (
            <Grid item xs={12} sm={6} key={`grid-${game.id}`}>
              <GamesCard
                key={`games-card-${game.id}`}
                {...game}
                platformName={this.props.getPlatformNameById(game.platformId)}
                t={this.props.t}
                averageHoursPerDay={this.props.averageHoursPerDay}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}
