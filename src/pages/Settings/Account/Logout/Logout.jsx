/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

import styles from './styles';

const User = ({
  classes,
  logout,
  user,
  subscribePro,
  unsubscribePro,
  error,
  requestUser,
  requestPlans,
  plans,
}) => {
  useEffect(() => {
    requestUser();
    requestPlans();
  }, []);

  return (
    <form className={classes.dialog}>
      <div className={classes.table}>
        <div className={classes.row}>
          <Chip className={classes.balance} label={`Your balance: ${user.balance || 0} BTC`}></Chip>
        </div>
        <div>
          <div>Your personal BTC adress:</div>
          <TextField value={user.btcAdress} margin="normal" fullWidth autoFocus />
        </div>
        <div>
          <div>Your referral code:</div>
          <TextField value={user.referralCode} margin="normal" fullWidth />
        </div>
        <div className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Free Plan
              </Typography>
              <Typography variant="body2" component="p">
                {plans[0]?.description}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Pro Plan
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {plans[1]?.price} BTC
              </Typography>
              <Typography variant="body2" component="p">
                {plans[1]?.description}
              </Typography>
            </CardContent>
            {!user.pro && (
              <CardActions className={classes.center}>
                <Button variant="outlined" size="small" onClick={subscribePro}>
                  Subscribe
                </Button>
              </CardActions>
            )}
          </Card>
        </div>
      </div>
      {!!error && (
        <Typography className={classes.red} variant="body2" component="p">
          {error}
        </Typography>
      )}
      {!!user.pro && (
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {`your subscribtion expires in ${moment(user.expirationDate).format('DD.MM.YYYY')}`}
        </Typography>
      )}
      <div className={classes.buttonsContainer}>
        <Button onClick={logout} variant="outlined" className={classes.button}>
          logout
        </Button>
      </div>
    </form>
  );
};

export default withStyles(styles)(User);
