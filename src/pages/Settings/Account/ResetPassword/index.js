import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import ResetPassword from './ResetPassword';

export default connect(
  () => ({}),
  { push }
)(ResetPassword);
