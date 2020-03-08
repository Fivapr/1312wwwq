import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import core from './modules/core/reducer'
import auth from './modules/auth/reducer'

const reducer = history =>
  combineReducers({
    router: connectRouter(history),
    core,
    auth
  })

export default reducer
