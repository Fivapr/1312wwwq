/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import whiteIcon from '../whiteIcon.svg'
import blackIcon from '../blackIcon.svg'
import React, { Fragment, useState } from 'react'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { api } from '../../../../loggerApi'
import styles from '../Login/styles'
import { useEnterSubmit2 } from '../Register/Register'

const Register = ({ classes, email, code, url, push, theme, history }) => {
  const linkToLogin = () => push(`${url}/login`)
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState('')
  const [serverError, setServerError] = useState('')

  const testPassword = () => {
    if (password && (password.length < 6 || password.length > 32)) {
      setPasswordError('Must be from 6 to 32 symbols.')
    }
  }

  const testRepeatPassword = () => {
    if (repeatPassword && password !== repeatPassword) {
      setRepeatPasswordError('Passwords must be the same.')
    }
  }

  const handleSubmit = async () => {
    if (password.length < 6 || password.length > 32) {
      setPasswordError('Must be from 6 to 32 symbols.')
      return
    }

    if (password !== repeatPassword) {
      setRepeatPasswordError('Passwords must be the same.')
      return
    }

    const { success, error } = await api.resetPassword({
      password,
      email,
      code
    })

    if (!success) {
      setServerError(error)
      return
    }

    history.push(`${url}/login`)
  }

  useEnterSubmit2(handleSubmit, password, repeatPassword)

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.text}>
          {theme.palette.type === 'dark' ? (
            <img
              className={classes.icon}
              src={whiteIcon}
              width="128"
              height="128"
              alt="icon"
            />
          ) : (
            <img
              className={classes.icon}
              src={blackIcon}
              width="128"
              height="128"
              alt="icon"
            />
          )}

          <div className={classes.centerForm}>
            <TextField
              label="Password"
              name="Password"
              type="password"
              placeholder="Enter your password"
              className={classes.textField}
              onBlur={testPassword}
              error={!!passwordError}
              helperText={passwordError}
              value={password}
              onChange={e => {
                setPassword(e.target.value)
                setPasswordError('')
              }}
            />
            <TextField
              label="Repeat password"
              name="Password"
              type="password"
              placeholder="Repeat your password"
              className={classes.textField}
              onBlur={testRepeatPassword}
              error={!!repeatPasswordError}
              helperText={repeatPasswordError}
              value={repeatPassword}
              onChange={e => {
                setRepeatPassword(e.target.value)
                setRepeatPasswordError('')
              }}
            />
            {serverError && (
              <div className={classes.errorText}>{serverError}</div>
            )}
            <Button
              classes={{ root: classes.submitButton }}
              variant="outlined"
              onClick={handleSubmit}
            >
              Reset
            </Button>
          </div>

          <Paper square elevation={0} className={classes.footer}>
            <Typography>
              Remember your password?{' '}
              <span className={classes.link} onClick={linkToLogin}>
                Sign in here.
              </span>
            </Typography>
          </Paper>
        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(withStyles(styles, { withTheme: true })(Register))
