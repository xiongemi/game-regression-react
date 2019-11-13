import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchProfile } from '../profile/store/profile.actions';
import { profileState } from '../profile/store/profile.selectors';
import { RootState } from '../store/root-state.interface';

import { Header } from './Header';

function mapStateToProps(state: RootState) {
  return {
    profile: profileState(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchProfile: () => dispatch(fetchProfile()),
  };
}

export const ConnectedHeader: any = connect(mapStateToProps, mapDispatchToProps)(Header);
