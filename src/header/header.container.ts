import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchProfile } from '../store/profile/profile.actions';
import { getProfile } from '../store/profile/profile.selectors';
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
