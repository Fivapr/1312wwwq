import React from 'react'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import { ConnectedRouter } from 'connected-react-router'
import createTheme from '../../createTheme'
import Settings from '../Settings'
import { history } from '../../store/configureStore'

import styles from './styles'

const App = ({}) => {
  return (
    <MuiThemeProvider theme={createTheme()}>
      <ConnectedRouter history={history}>
        <Settings />
      </ConnectedRouter>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(App)
