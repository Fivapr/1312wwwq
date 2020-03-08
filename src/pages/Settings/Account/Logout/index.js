import { connect } from 'react-redux';
import Logout from './Logout';
import {
  logout,
  subscribePro,
  unsubscribePro,
  requestUser,
  requestPlans,
} from '../../../../store/modules/auth/reducer';
import {
  selectLoggedIn,
  selectUser,
  selectSubscribeError,
  selectPlans,
} from '../../../../store/modules/auth/selectors';

export default connect(
  state => ({
    isLoggedIn: selectLoggedIn(state),
    user: selectUser(state),
    error: selectSubscribeError(state),
    plans: selectPlans(state),
  }),
  { logout, subscribePro, unsubscribePro, requestUser, requestPlans }
)(Logout);
