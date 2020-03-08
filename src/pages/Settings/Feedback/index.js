/* eslint-disable no-shadow */

import { connect } from 'react-redux';

import { sendFeedback } from '../../../store/modules/core/reducer';

import Feedback from './Feedback';

export default connect(
  () => ({}),
  { sendFeedback }
)(Feedback);
