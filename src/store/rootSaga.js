import { fork, all } from 'redux-saga/effects'

import core from './modules/core/saga'
import auth from './modules/auth/saga'

export default function* rootSaga() {
  yield all([fork(core), fork(auth)])
}
