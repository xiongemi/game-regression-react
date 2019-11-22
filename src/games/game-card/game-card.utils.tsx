import { addDays, format, parseISO } from 'date-fns';
import React from 'react';
import { AccessTime, CheckCircle, PlayCircleFilled } from '@material-ui/icons';

import { Game } from '../../store/games/types/game.interface';
import { GameStatus } from '../../store/games/types/game-status.enum';

import { GameCardProps } from './game-card-props.interface';

export function getGameStatus(game: Game): GameStatus {
  if (game.isComplete) {
    return GameStatus.Completed;
  }
  if (game.numberOfHoursPlayed === 0) {
    return GameStatus.NotStarted;
  }
  return GameStatus.InProgress;
}

export function getCardBackgroundColor(gameStatus: GameStatus): string {
  if (gameStatus === GameStatus.Completed) {
    return 'bg-green';
  }
  if (gameStatus === GameStatus.NotStarted) {
    return 'bg-orange';
  }
  return 'bg-red';
}

export function getCardIcon(gameStatus: GameStatus): React.ReactNode {
  if (gameStatus === GameStatus.Completed) {
    return <CheckCircle />;
  }
  if (gameStatus === GameStatus.NotStarted) {
    return <PlayCircleFilled />;
  }
  return <AccessTime />;
}

export function getProgress(game: Game): number {
  return Math.round((game.numberOfHoursPlayed / game.numberOfHoursToComplete) * 1000) / 100;
}

export function getCompleteDate(game: GameCardProps): string {
  if (!game.averageHoursPerDay) {
    return 'N/A';
  }
  const daysLeft =
    (game.numberOfHoursToComplete - game.numberOfHoursPlayed) / game.averageHoursPerDay;
  const completeDate = addDays(parseISO(game.dateCreated), daysLeft);
  return format(completeDate, 'MM/dd/yyyy');
}
