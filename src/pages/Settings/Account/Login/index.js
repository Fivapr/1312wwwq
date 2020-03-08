import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { setToken, requestUser } from '../../../../store/modules/auth/reducer';
import Login from './Login';

export default connect(
  () => ({}),
  { push, setToken, requestUser }
)(Login);
