import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  getProfile,
  hasEditProfileFailed,
  isEditProfilePending,
  isEditProfileSaved,
} from '../store/profile.selectors';
import { RootState } from '../../store/root-state.interface';
import { editProfile, resetEditProfileStatus } from '../store/profile.actions';
import { Profile } from '../types/profile.interface';

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

export const ConnectedProfileEdit: any = connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
