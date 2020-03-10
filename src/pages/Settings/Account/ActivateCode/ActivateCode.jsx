/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { api } from '../../../../loggerApi'
import styles from '../Login/styles'
import { useEnterSubmit } from '../Login/Login'

import whiteIcon from '../whiteIcon.svg'
import blackIcon from '../blackIcon.svg'

const ActivateCode = ({
  classes,
  email,
  pathToPush,
  setVerifyCode,
  url,
  push,
  theme,
  history
}) => {
  const linkToLogin = () => push(`${url}/login`)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    let data
    if (pathToPush === 'login') {
      data = await api.verifyEmail({ email, code })
    } else {
      data = await api.verifyReset({ email, code })
    }
    const { success, error: verifyError } = data

    if (!success) {
      setError(verifyError)
      return
    }

    setVerifyCode(code)
    history.push(`${url}/${pathToPush}`)
  }

  useEnterSubmit(code, handleSubmit)

  console.log('whiteIcon', whiteIcon)

  return (
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
          <span className={classes.helperText}>
            Soon you will receive verification code to your email adress.
          </span>
          <TextField
            label="Verification code"
            name="verification code"
            placeholder="Enter your code"
            className={classes.textField}
            error={!!error}
            helperText={error}
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <Button
            classes={{ root: classes.submitButton }}
            variant="outlined"
            onClick={handleSubmit}
          >
            verify
          </Button>
        </div>
      </div>

      <Paper square elevation={0} className={classes.footer}>
        <Typography>
          {pathToPush === 'login'
            ? 'Already have an account? '
            : 'Remember your password? '}
          <span className={classes.link} onClick={linkToLogin}>
            {'Sign in here.'}
          </span>
        </Typography>
      </Paper>
    </div>
  )
}

export default withRouter(withStyles(styles, { withTheme: true })(ActivateCode))
