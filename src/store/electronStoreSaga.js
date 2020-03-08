/* eslint-disable require-yield */
/* eslint-disable max-len */
import { takeEvery, select } from 'redux-saga/effects'
import Store from 'electron-store'
import { selectExchange, selectWatchlist } from './modules/exchange/selectors'
import { toggleWatchlist } from './modules/exchange/reducer'
import { changeTheme } from './modules/core/reducer'
import {
  incrementInstructionStep,
  resetInstructionCounter
} from './modules/instructionMode/reducer'
import { MAX_STEP } from '../pages/Analysis/InstructionOverlay/InstructionOverlay'
import { selectInstructionStep } from './modules/instructionMode/selectors'
import { addAccount, deleteAccount } from './modules/tradingCore/reducer'
import { selectPassword } from './modules/appPassword/selectors'
import { defaultESPassword } from '../appConstant'

const electronStore = new Store({})

function* toggleWatchlistSaga() {
  try {
    const watchlist = yield select(selectWatchlist)
    const exchange = yield select(selectExchange)

    electronStore.set(`watchlist.${exchange}`, watchlist)
  } catch (error) {}
}

function* changeThemeSaga({ payload: theme }) {
  try {
    electronStore.set('theme', theme)
  } catch (error) {}
}

function* instructionCompletedSaga() {
  const currentStep = yield select(selectInstructionStep)

  if (currentStep === MAX_STEP) {
    electronStore.set('instructionsCompleted', true)
  }
}

function* skipInstructionSaga() {
  electronStore.set('instructionsCompleted', true)
}

function* deleteAccountSaga({ payload: account }) {
  const password = yield select(selectPassword)
  const accountsElectronStore = new Store({
    name: 'apiKeys',
    encryptionKey: password || defaultESPassword
  })
  accountsElectronStore.delete(`accounts.${account.name}`)
}

function* addAccountSaga({ payload: account }) {
  const password = yield select(selectPassword)
  const accountsElectronStore = new Store({
    name: 'apiKeys',
    encryptionKey: password || defaultESPassword
  })

  accountsElectronStore.set(`accounts.${account.name}`, {
    apiKey: account.apiKey,
    apiSecret: account.apiSecret,
    exchange: account.exchange
  })
}

export default function*() {
  yield takeEvery(toggleWatchlist, toggleWatchlistSaga)
  yield takeEvery(changeTheme, changeThemeSaga)
  yield takeEvery(incrementInstructionStep, instructionCompletedSaga)
  yield takeEvery(resetInstructionCounter, skipInstructionSaga)
  yield takeEvery(deleteAccount, deleteAccountSaga)
  yield takeEvery(addAccount, addAccountSaga)
}
