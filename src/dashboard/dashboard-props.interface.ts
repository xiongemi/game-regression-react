import { TFunction } from 'i18next';

export interface DashboardProps {
  uncompletedGamesProgress: number;
  completeGamesProgress: number;
  isPending: boolean;
  numberOfDaysRemaining: number;
  uncompletedGamesCount: number;
  completeGamesCount: number;
  fetchGames: () => void;
  t: TFunction;
}
