/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { api } from '../../../../loggerApi';
import styles from '../Login/styles';

const ENTER_KEY = 'Enter';

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const useEnterSubmit2 = (handleSubmit, ...args) =>
  useEffect(() => {
    const handler = event => {
      if (event.key === ENTER_KEY) {
        handleSubmit();
      }
    };
    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [...args]);

const Register = ({ classes, setEmailForActivateCode, url, push, theme, history }) => {
  const linkToLogin = () => push(`${url}/login`);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [refCode, setRefCode] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const [serverError, setServerError] = useState('');

  const testEmail = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Email must be valid');
    }
  };

  const testPassword = () => {
    if (password && (password.length < 6 || password.length > 32)) {
      setPasswordError('Must be from 6 to 32 symbols.');
    }
  };

  const testRepeatPassword = () => {
    if (repeatPassword && password !== repeatPassword) {
      setRepeatPasswordError('Passwords must be the same.');
    }
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError('Email must be valid');
      return;
    }

    if (password.length < 6 || password.length > 32) {
      setPasswordError('Must be from 6 to 32 symbols.');
      return;
    }

    if (password !== repeatPassword) {
      setRepeatPasswordError('Passwords must be the same.');
      return;
    }

    const { success, error, code } = await api.signUp({ email, password, refCode });

    // code===0 ~ needs verification
    if (!success && code !== 0) {
      setServerError(error);
      return;
    }

    history.push(`${url}/verify`);
    setEmailForActivateCode(email);
  };

  useEnterSubmit2(handleSubmit, email, password, repeatPassword);

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.text}>
          {theme.palette.type === 'dark' ? (
            <img
              className={classes.icon}
              src="../resources/whiteIcon.svg"
              width="128"
              height="128"
              alt="icon"
            />
          ) : (
            <img
              className={classes.icon}
              src="../resources/blackIcon.svg"
              width="128"
              height="128"
              alt="icon"
            />
          )}
          <div className={classes.centerForm}>
            <TextField
              label="Email adress"
              name="Email"
              type="email"
              placeholder="Enter your email adress"
              className={classes.textField}
              onBlur={testEmail}
              error={!!emailError}
              helperText={emailError}
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setEmailError('');
              }}
            />
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
                setPassword(e.target.value);
                setPasswordError('');
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
                setRepeatPassword(e.target.value);
                setRepeatPasswordError('');
              }}
            />
            <TextField
              label="Referral code"
              name="Referral code"
              type="text"
              placeholder="Referral code"
              className={classes.textField}
              value={refCode}
              onChange={e => {
                setRefCode(e.target.value);
              }}
            />
            {serverError && <div className={classes.errorText}>{serverError}</div>}
            <Button
              classes={{ root: classes.submitButton }}
              variant="outlined"
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </div>
        </div>

        <Paper square elevation={0} className={classes.footer}>
          <Typography>
            Already have an account?{' '}
            <span className={classes.link} onClick={linkToLogin}>
              Sign in here.
            </span>
          </Typography>
        </Paper>
      </div>
    </Fragment>
  );
};

export default withRouter(withStyles(styles, { withTheme: true })(Register));
