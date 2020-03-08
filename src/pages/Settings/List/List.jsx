import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FeedbackOutlined from '@material-ui/icons/FeedbackOutlined';
import Lock from '@material-ui/icons/Lock';
import InvertColors from '@material-ui/icons/InvertColors';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import styles from './styles';

const SettingsList = ({ classes, push, isLoggedIn }) => {
  const linkToTheme = () => push('/settings/theme');
  const linkToFeedback = () => push('/settings/feedback');
  const linkToAccount = () => push('/settings/account');
  const linkToAppPassword = () => push('/settings/password');
  const linkToReferral = () => push('/settings/referral');
  const linkToBalanceHistory = () => push('/settings/balanceHistory');

  return (
    <>
      <MenuItem classes={{ root: classes.menuItem }} onClick={linkToAccount}>
        <ListItemIcon className={classes.menuIcon}>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary="Account" />
      </MenuItem>
      {isLoggedIn && (
        <MenuItem classes={{ root: classes.menuItem }} onClick={linkToReferral}>
          <ListItemIcon className={classes.menuIcon}>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Referral" />
        </MenuItem>
      )}
      {isLoggedIn && (
        <MenuItem classes={{ root: classes.menuItem }} onClick={linkToBalanceHistory}>
          <ListItemIcon className={classes.menuIcon}>
            <SwapHorizIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Transactions" />
        </MenuItem>
      )}
      <MenuItem classes={{ root: classes.menuItem }} onClick={linkToAppPassword}>
        <ListItemIcon className={classes.menuIcon}>
          <Lock />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary="Set password" />
      </MenuItem>
      <MenuItem classes={{ root: classes.menuItem }} onClick={linkToTheme}>
        <ListItemIcon className={classes.menuIcon}>
          <InvertColors />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary="Change theme" />
      </MenuItem>
      <MenuItem classes={{ root: classes.menuItem }} onClick={linkToFeedback}>
        <ListItemIcon className={classes.menuIcon}>
          <FeedbackOutlined />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary="Send feedback" />
      </MenuItem>
    </>
  );
};

export default withStyles(styles)(SettingsList);
