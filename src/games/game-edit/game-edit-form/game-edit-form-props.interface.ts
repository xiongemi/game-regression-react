import { Game } from '../../../store/games/types/game.interface';
import { GameEditProps } from '../game-edit.props';

export interface GameEditFormProps extends GameEditProps {
  game: Game;
}
