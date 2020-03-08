/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import React, { useState, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const selectThemes = ['Feedback', 'Bug report', 'Propose new feature', 'Other'];

const FeedbackModal = ({ classes, sendFeedback }) => {
  const [feedback, setFeedback] = useState('');
  const [theme, setTheme] = useState('feedback');
  const [feedbackError, setFeedbackError] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackChange = e => setFeedback(e.target.value);
  const handleThemechange = e => setTheme(e.target.value);

  const validateFeedback = () => {
    if (!feedback) {
      setFeedbackError(true);
    }
    setFeedbackError(false);
  };

  const handleSubmit = () => {
    if (feedback) {
      sendFeedback({ theme, feedback });
      setFeedbackSubmitted(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.feedback}>
        <DialogTitle id="alert-dialog-slide-title" classes={{ root: classes.title }}>
          Send feedback
        </DialogTitle>
        <div className={classes.dialog}>
          <div className={classes.formContainer}>
            {!feedbackSubmitted ? (
              <Fragment>
                <form className={classes.form}>
                  <TextField
                    select
                    value={theme}
                    onChange={handleThemechange}
                    className={classes.input}
                    label="Topic"
                  >
                    {selectThemes.map(selectTheme => (
                      <MenuItem value={selectTheme} key={selectTheme}>
                        {selectTheme}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    value={feedback}
                    onChange={handleFeedbackChange}
                    error={feedbackError}
                    onBlur={validateFeedback}
                    variant="outlined"
                    placeholder="Write your feedback here"
                    className={classes.input}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    multiline
                    rows={8}
                    rowsMax={8}
                  />
                </form>

                <div className={classes.buttonsContainer}>
                  <Button onClick={handleSubmit} variant="outlined" className={classes.button}>
                    Send feedback
                  </Button>
                </div>
              </Fragment>
            ) : (
              <Typography>Thank you for helping us build better product</Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FeedbackModal.defaultProps = {
  classes: {},
  sendFeedback: () => {},
};

FeedbackModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  sendFeedback: PropTypes.func,
};

export default withStyles(styles)(FeedbackModal);
