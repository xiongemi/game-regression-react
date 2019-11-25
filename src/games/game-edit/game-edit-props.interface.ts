import { WithTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { Game } from '../../store/games/types/game.interface';

export interface GameEditPropsInterface
  extends WithTranslation,
    RouteComponentProps<{ id: string }> {
  fetchGames: () => void;
  fetchPlatforms: () => void;
  getPlatformNameById: (id: number) => string;
  getGameById: (id: number) => Game | undefined;
  isPending: boolean;
}
