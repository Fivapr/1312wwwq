/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import whiteIcon from '../whiteIcon.svg'
import blackIcon from '../blackIcon.svg'
import React, { Fragment, useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { api } from '../../../../loggerApi'
import styles from './styles'

const ENTER_KEY = 'Enter'

export const useEnterSubmit = (password, handleSubmit) =>
  useEffect(() => {
    const handler = event => {
      if (event.key === ENTER_KEY) {
        handleSubmit()
      }
    }
    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [password])

const Login = ({
  classes,
  setEmailForActivateCode,
  url,
  push,
  theme,
  setToken,
  requestUser,
  location,
  history
}) => {
  const linkToRegister = () => push(`${url}/register`)
  const linkToReset = () => push(`${url}/forgot`)
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const [password, setPassword] = useState('')
  const [serverError, setServerError] = useState('')
  const needLogin = location?.state?.needLogin

  const handleSubmit = async () => {
    if (password.length < 6 || password.length > 32) {
      setServerError('Wrong password')
      return
    }

    const data = await api.login({ email, password })
    const { token, user, error = '', code } = data

    if (code === 0) {
      history.push(`${url}/verify`)
      setEmailForActivateCode(email)
      return
    }

    if (!token) {
      setServerError(error)
      return
    }

    localStorage.setItem('email', email)

    setToken(token)
    requestUser()

    if (needLogin) {
      history.push('/arbitrage')
    }
  }

  useEnterSubmit(password, handleSubmit)

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
          {needLogin ? (
            <Typography
              className={classes.needLoginText}
            >{`You have to be logged in to use ${location.state.page} feature`}</Typography>
          ) : null}
          <div className={classes.centerForm}>
            <TextField
              label="Email adress"
              name="Email"
              type="email"
              placeholder="Enter your email adress"
              className={classes.textField}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              name="Password"
              type="password"
              placeholder="Enter your password"
              className={classes.textField}
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
            {!!serverError && (
              <div className={classes.errorText}>{serverError}</div>
            )}
            <Button
              classes={{ root: classes.submitButton }}
              variant="outlined"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </div>
        </div>

        <Paper square elevation={0} className={classes.footer}>
          <Typography>
            <span style={{ display: 'block', textAlign: 'center' }}>
              You don't have an account?{' '}
              <span className={classes.link} onClick={linkToRegister}>
                Sign up here.
              </span>
            </span>
            <span style={{ display: 'block', textAlign: 'center' }}>
              Forgot your password?{' '}
              <span className={classes.link} onClick={linkToReset}>
                Reset your password.
              </span>
            </span>
          </Typography>
        </Paper>
      </div>
    </Fragment>
  )
}

export default withRouter(withStyles(styles, { withTheme: true })(Login))
