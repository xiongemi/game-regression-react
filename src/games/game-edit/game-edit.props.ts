import { WithTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { Game } from '../../store/games/types/game.interface';
import { Platform } from '../../store/platforms/types/platform.interface';

export interface GameEditProps extends WithTranslation, RouteComponentProps<{ id: string }> {
  fetchGames: () => void;
  fetchPlatforms: () => void;
  getPlatformNameById: (id: number) => string;
  getGameById: (id: number) => Game | undefined;
  updateGame: (game: Game) => void;
  deleteGame: (game: Game) => void;
  goBackToGames: () => void;
  isFetchPending: boolean;
  isUpdatePending: boolean;
  isGameUpdated: boolean;
  platforms: Platform[];
}
