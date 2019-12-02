import { WithTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { Game } from '../store/games/types/game.interface';

export interface GamesProps extends WithTranslation, RouteComponentProps {
  games: Game[];
  fetchGames: () => void;
  fetchPlatforms: () => void;
  getPlatformNameById: (id: number) => string;
  isPending: boolean;
  averageHoursPerDay: number;
}
