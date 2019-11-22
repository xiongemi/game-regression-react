import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { RootState } from '../../store/root-state.interface';
import { getProfile } from '../../store/profile/profile.selectors';

import { ProfileView } from './ProfileView';

function mapStateToProps(state: RootState) {
  return {
    profile: getProfile(state),
  };
}

export const ConnectedProfileView: any = connect(mapStateToProps)(ProfileView);

export const ProfileViewContainer = withTranslation()(ConnectedProfileView);
