import { connect } from 'react-redux';
import Referral from './Referral';
import { selectUser } from '../../../store/modules/auth/selectors';

export default connect(
  state => ({ user: selectUser(state) }),
  {}
)(Referral);
