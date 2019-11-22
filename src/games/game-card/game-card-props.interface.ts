import { TFunction } from 'i18next';

import { Game } from '../../store/games/types/game.interface';

export interface GameCardProps extends Game {
  platformName: string;
  t: TFunction;
  averageHoursPerDay: number;
}
