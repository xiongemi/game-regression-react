import { ApiStatus } from '../../../types/api-status.enum';

import { Profile } from './profile.interface';

export interface ProfileState {
  profile: Profile | null;
  fetchStatus: ApiStatus;
  editStatus: ApiStatus;
  fetchError: any | null;
  editError: any | null;
}
