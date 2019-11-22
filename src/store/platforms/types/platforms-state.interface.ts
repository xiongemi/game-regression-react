import { ApiStatus } from '../../../types/api-status.enum';

import { Platform } from './platform.interface';

export interface PlatformsState {
  platforms: Platform[];
  fetchStatus: ApiStatus;
}
