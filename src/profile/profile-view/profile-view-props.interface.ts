import { TFunction } from 'i18next';

import { Profile } from '../../store/profile/types/profile.interface';

export interface ProfileViewProps {
  profile: Profile | null;
  t: TFunction;
}
