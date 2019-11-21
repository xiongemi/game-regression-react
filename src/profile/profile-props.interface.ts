import { TFunction } from 'i18next';

import { Profile } from './types/profile.interface';

export interface ProfileProps {
  profile: Profile | null;
  t: TFunction;
}
