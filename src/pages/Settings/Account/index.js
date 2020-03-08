import { connect } from 'react-redux';
import Account from './Account';
import { selectLoggedIn } from '../../../store/modules/auth/selectors';

export default connect(
  state => ({ isLoggedIn: selectLoggedIn(state) }),
  {}
)(Account);
