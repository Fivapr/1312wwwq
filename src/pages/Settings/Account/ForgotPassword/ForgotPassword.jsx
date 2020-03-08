/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { api } from '../../../../loggerApi';
import styles from '../Login/styles';
import { useEnterSubmit } from '../Login/Login';

const ForgotPassword = ({ classes, setEmailForActivateCode, url, push, theme, history }) => {
  const linkToLogin = () => push(`${url}/login`);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const { success, error: serverError } = await api.forgot(email);

    if (!success) {
      setError(serverError);
      return;
    }

    setEmailForActivateCode(email);
    history.push(`${url}/verifyResetPassword`);
  };

  useEnterSubmit(email, handleSubmit);

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
            <span className={classes.helperText}>
              You can reset your password by sending verification code to your email.
            </span>
            <TextField
              label="Email adress"
              name="Email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email adress"
              className={classes.textField}
              error={!!error}
              helperText={error}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Button
              classes={{ root: classes.submitButton }}
              variant="outlined"
              onClick={handleSubmit}
            >
              send code
            </Button>
          </div>
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
    </Fragment>
  );
};

export default withRouter(withStyles(styles, { withTheme: true })(ForgotPassword));
