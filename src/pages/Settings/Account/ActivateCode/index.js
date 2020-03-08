import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import ActivateCode from './ActivateCode';

export default connect(
  () => ({}),
  { push }
)(ActivateCode);
