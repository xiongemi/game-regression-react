import { Profile } from '../profile/types/profile.interface';

export interface HeaderProps {
  profile: Profile | null;
  fetchProfile: () => void;
}
