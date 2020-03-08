/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
import { takeLatest, call, put } from 'redux-saga/effects'

import { fetchCoinIcons, setIcons, sendFeedback } from './reducer'

const url = 'https://cryptobook.world/ru/api/get/coin'

const fetchIconsRequest = () => fetch(url).then(r => r.json())

function* fetchIconsSaga() {
  try {
    const icons = yield call(fetchIconsRequest)
    icons.sort((a, b) => b.market_cap - a.market_cap)
    const iconUrls = {}
    Object.keys(icons).forEach(key => {
      iconUrls[
        icons[key].short_name
      ] = `https://www.cryptobook.world${icons[key].icon}`
    })
    yield put(setIcons(iconUrls))
  } catch (error) {}
}

function* sendFeedbackSaga({ payload }) {
  try {
  } catch (error) {}
}

export default function*() {
  yield takeLatest(fetchCoinIcons, fetchIconsSaga)
  yield takeLatest(sendFeedback, sendFeedbackSaga)
}
