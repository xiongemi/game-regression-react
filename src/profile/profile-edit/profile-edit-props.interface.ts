import { RouteComponentProps } from 'react-router';
import { WithTranslation } from 'react-i18next';

import { Profile } from '../../store/profile/types/profile.interface';

export interface ProfileEditProps extends WithTranslation, RouteComponentProps {
  profile: Profile | null;
  editProfile: (profile: Profile) => void;
  resetStatus: () => void;
  isPending: boolean;
  isSaved: boolean;
  hasFailed: boolean;
}
