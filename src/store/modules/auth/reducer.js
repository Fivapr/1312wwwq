import { createAction, createReducer } from 'redux-act';
import set from 'lodash/fp/set';

const initialState = {
  token: '',
  user: { balance: 0, btcAdress: '', expirationDate: new Date(), pro: 0, referralCode: '' },
  error: '',
  plans: [],
};

export const setToken = createAction('auth/setToken');
export const setUser = createAction('auth/setUser');
export const logout = createAction('auth/logout');
export const requestUser = createAction('auth/requestUser');
export const requestPlans = createAction('auth/requestPlans');
export const setPlans = createAction('auth/setPlans');
export const subscribePro = createAction('auth/subscribePro');
export const unsubscribePro = createAction('auth/unsubscribePro');
export const setSubscribeError = createAction('auth/setSubscribeError');

const reducer = createReducer({}, initialState)
  .on(setToken, (state, payload) => set('token', payload, state))
  .on(setUser, (state, payload) => set('user', payload, state))
  .on(setSubscribeError, (state, payload) => set('error', payload, state))
  .on(setPlans, (state, payload) => set('plans', payload, state));

export default reducer;
