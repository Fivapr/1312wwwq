import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Route, Redirect, withRouter } from 'react-router-dom'
import styles from './styles'

import Header from './Header'
import Feedback from './Feedback'
import Account from './Account'
import Referral from './Referral'
import BalanceHistory from './BalanceHistory'

const SettingsPage = ({ classes, match }) => {
  console.log(match.url)
  const withPaper = Comp => props => (
    <Paper className={classes.right}>
      <Comp {...props} />
    </Paper>
  )

  return (
    <div className={classes.root}>
      <Paper className={classes.header}>
        <Header />
      </Paper>

      <Route path={`${match.url}/account`} render={withPaper(Account)} />
      <Route path={`${match.url}/feedback`} render={withPaper(Feedback)} />
      <Route path={`${match.url}/referral/`} render={withPaper(Referral)} />
      <Route
        path={`${match.url}/balanceHistory/`}
        render={withPaper(BalanceHistory)}
      />
      <Route
        exact
        path={`${match.url}/`}
        render={() => <Redirect to={`${match.url}/account`} />}
      />
    </div>
  )
}

export default withRouter(withStyles(styles)(SettingsPage))
