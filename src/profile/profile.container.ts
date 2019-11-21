import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { RootState } from '../store/root-state.interface';

import { getProfile } from './store/profile.selectors';
import { Profile } from './Profile';

function mapStateToProps(state: RootState) {
  return {
    profile: getProfile(state),
  };
}

export const ConnectedProfile: any = connect(mapStateToProps)(Profile);

export const ProfileContainer = withTranslation()(ConnectedProfile);
