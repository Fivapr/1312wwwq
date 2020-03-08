import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const Header = ({ classes }) => {
  return <div className={classes.header}>Oneexbit</div>
}

export default withStyles(styles)(Header)
