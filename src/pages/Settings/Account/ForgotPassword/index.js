import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import ForgotPassword from './ForgotPassword';

export default connect(
  () => ({}),
  { push }
)(ForgotPassword);
