import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import createReducer from './rootReducer'
import rootSaga from './rootSaga'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const history = createHashHistory()

export const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const reducer = createReducer(history)

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  // Preserve all  state changes in local storage

  return store
}
