import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import {
  getProfile,
  hasEditProfileFailed,
  isEditProfilePending,
  isEditProfileSaved,
} from '../../store/profile/profile.selectors';
import { RootState } from '../../store/root-state.interface';
import { editProfile, resetEditProfileStatus } from '../../store/profile/profile.actions';
import { Profile } from '../../store/profile/types/profile.interface';

import { ProfileEdit } from './ProfileEdit';

function mapStateToProps(state: RootState) {
  return {
    profile: getProfile(state),
    isPending: isEditProfilePending(state),
    isSaved: isEditProfileSaved(state),
    hasFailed: hasEditProfileFailed(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    editProfile: (profile: Profile) => dispatch(editProfile(profile)),
    resetStatus: () => dispatch(resetEditProfileStatus()),
  };
}

export const ProfileEditContainer = withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ProfileEdit),
);
