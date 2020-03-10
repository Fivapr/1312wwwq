import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import ActivateCode from './ActivateCode'
import ResetPassword from './ResetPassword'
import Referral from '../Referral'

const Pages = ({ match, isLoggedIn }) => {
  const [email, setEmailForActivateCode] = useState('')
  const [code, setCode] = useState('')

  if (isLoggedIn) {
    return <Referral />
  }

  return (
    <Switch>
      <Route
        path={`${match.url}/register/`}
        render={() => (
          <Register
            url={match.url}
            setEmailForActivateCode={setEmailForActivateCode}
          />
        )}
      />
      <Route
        path={`${match.url}/login/`}
        component={() => (
          <Login
            url={match.url}
            setEmailForActivateCode={setEmailForActivateCode}
          />
        )}
      />
      <Route
        path={`${match.url}/forgot/`}
        render={() => (
          <ForgotPassword
            url={match.url}
            setEmailForActivateCode={setEmailForActivateCode}
          />
        )}
      />
      <Route
        path={`${match.url}/verify/`}
        render={() => (
          <ActivateCode
            url={match.url}
            email={email}
            setVerifyCode={setCode}
            pathToPush="login"
          />
        )}
      />
      <Route
        path={`${match.url}/verifyResetPassword/`}
        render={() => (
          <ActivateCode
            url={match.url}
            email={email}
            setVerifyCode={setCode}
            pathToPush="resetPassword"
          />
        )}
      />

      <Route
        path={`${match.url}/resetPassword/`}
        render={() => (
          <ResetPassword url={match.url} email={email} code={code} />
        )}
      />
      <Route
        path={`${match.url}`}
        render={() => <Redirect to={{ pathname: `${match.url}/login` }} />}
      />
    </Switch>
  )
}

export default Pages
