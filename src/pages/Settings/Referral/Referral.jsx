import React, { Fragment, useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'

import { api } from '../../../loggerApi'
import styles from './styles.js'
import {
  DialogTitle,
  TableCell,
  TableRow,
  Table,
  TableBody,
  TextField
} from '@material-ui/core'

const Referral = ({ classes, user }) => {
  const [referrals, setReferrals] = useState({
    percents: { '1': 0.3, '2': 0.2, '3': 0.1 },
    referrals: { '1': 0, '2': 0, '3': 0 }
  })
  useEffect(() => {
    const requestReferrals = async () => {
      try {
        const response = await api.requestReferrals()
        console.log('TCL: response', response)
        setReferrals(response)
      } catch (e) {
        console.log('TCL: Referral -> e', e)
      }
    }

    requestReferrals()
  }, [])

  return (
    <Fragment>
      <DialogTitle>My referrals</DialogTitle>

      <div className={classes.text}>
        Onexbit has upgraded our Referral Program! Invite your friends to
        register and trade inside our terminal, just share the code below and
        you will get part of your referral's income after they buing
        subscriptions to our services.
      </div>

      <TextField
        value={`https://account.oneexbit.com/#/account/register/${user.referralCode}`}
        className={classes.refCode}
        fullWidth
      />

      <div className={classes.text}>
        For each registered referral you will have these percentage of his
        deposits:
      </div>

      <div className={classes.flex}>
        <div className={classes.row}>
          <div className={classes.cell}>1 lvl:</div>
          <div className={classes.cell}>
            {referrals.percents[1] * 100} {'%'}
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>2 lvl:</div>
          <div className={classes.cell}>
            {referrals.percents[2] * 100} {'%'}
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>3 lvl:</div>
          <div className={classes.cell}>
            {referrals.percents[3] * 100} {'%'}
          </div>
        </div>
      </div>

      {referrals.referrals[1] ? (
        <>
          <div className={classes.text}>You currently have:</div>
          <div className={classes.flex}>
            <div className={classes.row}>
              <div className={classes.cell}>1 lvl:</div>
              <div className={classes.cell}>{referrals.referrals[1] || 0}</div>
            </div>
            <div className={classes.row}>
              <div className={classes.cell}>2 lvl:</div>
              <div className={classes.cell}>{referrals.referrals[2] || 0}</div>
            </div>
            <div className={classes.row}>
              <div className={classes.cell}>3 lvl:</div>
              <div className={classes.cell}>{referrals.referrals[3] || 0}</div>
            </div>
          </div>
        </>
      ) : (
        <div className={classes.text}>
          Currently you don't have anyone invited.
        </div>
      )}
    </Fragment>
  )
}

export default withStyles(styles)(Referral)
