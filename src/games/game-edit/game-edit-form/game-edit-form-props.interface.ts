import { TFunction } from 'i18next';

import { Game } from '../../../store/games/types/game.interface';
import { Platform } from '../../../store/platforms/types/platform.interface';

export interface GameEditFormProps {
  game: Game;
  t: TFunction;
  isPending: boolean;
  platforms: Platform[];
  updateGame: (game: Game) => void;
  goBackToGames: () => void;
}
