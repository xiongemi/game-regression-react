import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchProfile } from '../profile/store/profile.actions';
import { getProfile } from '../profile/store/profile.selectors';
import { RootState } from '../store/root-state.interface';

import { Header } from './Header';

function mapStateToProps(state: RootState) {
  return {
    profile: getProfile(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchProfile: () => dispatch(fetchProfile()),
  };
}

export const HeaderContainer: any = connect(mapStateToProps, mapDispatchToProps)(Header);
