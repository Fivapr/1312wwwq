import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { api } from '../../../loggerApi';
import styles from './styles.js';

import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const BalanceHistory = ({ classes }) => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const requestBalanceHistory = async () => {
      try {
        const response = await api.requestBalanceHistory();
        setHistory(response.reverse());
      } catch (error) {
        console.log(error);
      }
    };

    requestBalanceHistory();
  }, []);

  return (
    <div style={{ maxHeight: '100%', overflow: 'hidden' }}>
      <DialogTitle>My transactions</DialogTitle>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Change</TableCell>
            <TableCell align="center">Reason</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
      </Table>

      <div>
        <Table>
          <TableBody>
            {history.length ? (
              history.map(({ change, reason, createdAt }) => {
                return (
                  <TableRow key={createdAt}>
                    <TableCell classes={{ root: `${classes.string} ${classes.nowrap}` }}>
                      {change >= 0 && '+'} {change} {'BTC'}
                    </TableCell>
                    <TableCell align="center" classes={{ root: classes.string }}>
                      {reason}{' '}
                    </TableCell>
                    <TableCell align="right" classes={{ root: classes.string }}>
                      {moment(createdAt).format('DD.MM.YYYY')}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <Typography className={classes.text}>No transactions...</Typography>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default withStyles(styles)(BalanceHistory);
