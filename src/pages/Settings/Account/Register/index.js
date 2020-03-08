import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Register from './Register';

export default connect(
  () => ({}),
  { push }
)(Register);
