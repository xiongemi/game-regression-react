import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getProfile } from '../store/profile.selectors';
import { RootState } from '../../store/root-state.interface';
import { editProfile } from '../store/profile.actions';
import { Profile } from '../types/profile.interface';

import { ProfileEdit } from './ProfileEdit';

function mapStateToProps(state: RootState) {
  return {
    profile: getProfile(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    editProfile: (profile: Profile) => dispatch(editProfile(profile)),
  };
}

export const ConnectedProfileEdit: any = connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
