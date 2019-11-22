import * as H from 'history';

import { Profile } from '../../store/profile/types/profile.interface';

export interface ProfileEditProps {
  profile: Profile | null;
  editProfile: (profile: Profile) => void;
  resetStatus: () => void;
  isPending: boolean;
  isSaved: boolean;
  hasFailed: boolean;
  history: H.History;
}
