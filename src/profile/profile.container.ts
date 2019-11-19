import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../store/root-state.interface';

import { getProfile } from './store/profile.selectors';
import { Profile } from './Profile';

function mapStateToProps(state: RootState) {
  return {
    profile: getProfile(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export const ConnectedProfile: any = connect(mapStateToProps, mapDispatchToProps)(Profile);
