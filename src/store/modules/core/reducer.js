import { createAction, createReducer } from 'redux-act';
import set from 'lodash/fp/set';
import { storeVersion } from '../../../appConstant';

const initialState = {
  isMac: process.platform === 'darwin',
  isOnline: true,
  reloadChart: false,
  storeVersion,
  theme: 'dark',
  icons: {},
  settingOpen: false,
  settingPage: 'exchanges',
  pairsBarOpen: false,
  supportedIntervals: [],
  historyComponent: 'balance',
  activeOrderType: 'limit',
  email: '',
  showAllAccounts: false,
  showAllPairs: false,
  showAllPositions: false,
  orderBookIsLoading: false,
  tradesIsLoading: false,
  pairListSorting: 'VolumeDescending',
};

export const setOnline = createAction('core/setOnline');
export const setReloadChart = createAction('core/setReloadChart');
export const changeTheme = createAction('core/changeTheme');
export const openCloseSetting = createAction('core/openCloseSetting');
export const openClosePairsBar = createAction('core/openClosePairsBar');
export const changePageSetting = createAction('core/changePageSetting');
export const sendFeedback = createAction('core/sendFeedback');
export const fetchCoinIcons = createAction('core/fetchCoinIcons');
export const setIcons = createAction('core/setIcons');
export const setEmail = createAction('core/setEmail');
export const setShowAllAccounts = createAction('core/setShowAllAccounts');
export const setShowAllPositions = createAction('core/setShowAllPositions');
export const setShowAllPairs = createAction('core/setShowAllPairs');
export const setOrderBookIsLoading = createAction('core/setOrderBookIsLoading');
export const setTradesIsLoading = createAction('core/setTradesIsLoading');
export const setPairListSorting = createAction('core/setPairListSorting');

const reducer = createReducer({}, initialState)
  .on(setOnline, (state, payload) => set('isOnline', payload, state))
  .on(setReloadChart, (state, payload) => set('reloadChart', payload, state))
  .on(changeTheme, (state, payload) => set('theme', payload, state))
  .on(openCloseSetting, (state, payload) => set('settingOpen', payload, state))
  .on(openClosePairsBar, (state, payload) => set('pairsBarOpen', payload, state))
  .on(changePageSetting, (state, payload) => set('settingPage', payload, state))
  .on(setIcons, (state, payload) => set('icons', payload, state))
  .on(setEmail, (state, payload) => set('email', payload, state))
  .on(setShowAllAccounts, (state, payload) => set('showAllAccounts', payload, state))
  .on(setShowAllPositions, (state, payload) => set('showAllPositions', payload, state))
  .on(setShowAllPairs, (state, payload) => set('showAllPairs', payload, state))
  .on(setOrderBookIsLoading, (state, payload) => set('orderBookIsLoading', payload, state))
  .on(setTradesIsLoading, (state, payload) => set('tradesIsLoading', payload, state))
  .on(setPairListSorting, (state, payload) => set('pairListSorting', payload, state));

export default reducer;
