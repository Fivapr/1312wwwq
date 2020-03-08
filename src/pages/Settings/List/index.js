import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import List from './List';
import { selectLoggedIn } from '../../../store/modules/auth/selectors';

export default connect(
  state => ({
    pathname: state.router.location.pathname,
    isLoggedIn: selectLoggedIn(state),
  }),
  { push }
)(List);
