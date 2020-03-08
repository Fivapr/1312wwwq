/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
import { takeLatest, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  logout,
  setToken,
  setUser,
  requestUser,
  subscribePro,
  unsubscribePro,
  setSubscribeError,
  requestPlans,
  setPlans,
} from './reducer';
import { api } from '../../../loggerApi';

function* logoutSaga() {
  yield put(setToken(''));
  yield put(setUser({ onexBalance: 0, onexAdress: '', expirationDate: new Date(), pro: 0 }));
}

function* requestUserSaga() {
  try {
    const user = yield api.requestUserInfo();

    if (user.success) {
      yield put(
        setUser({
          referralCode: user.referralCode,
          btcAdress: user.addressBtc,
          balance: user.balance,
          expirationDate: user.planExpiration,
          pro: user.plan?.id !== 1,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* requestPlansSaga() {
  try {
    const data = yield api.requestPlans();

    yield put(setPlans(data));
  } catch (error) {
    console.log(error);
  }
}

function* subcribeProSaga() {
  try {
    const data = yield api.subscribe();

    console.log(data);

    if (data.success) {
      yield requestUserSaga();
    } else {
      yield put(setSubscribeError(data.error));
    }
  } catch (error) {
    console.log(error);
  }
}

function* unsubscribeProSaga() {
  try {
    const user = yield api.unsubscribe();

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

function* clearErrorSaga() {
  try {
    yield put(setSubscribeError(''));
  } catch (error) {
    console.log(error);
  }
}

export default function*() {
  yield takeLatest(logout, logoutSaga);
  yield takeLatest(requestUser, requestUserSaga);
  yield takeLatest(requestPlans, requestPlansSaga);
  yield takeLatest(subscribePro, subcribeProSaga);
  yield takeLatest('@@router/LOCATION_CHANGE', clearErrorSaga);
  yield takeLatest(unsubscribePro, unsubscribeProSaga);
}
