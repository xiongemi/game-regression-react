import { Profile } from '../store/profile/types/profile.interface';

export interface HeaderProps {
  profile: Profile | null;
  fetchProfile: () => void;
}
