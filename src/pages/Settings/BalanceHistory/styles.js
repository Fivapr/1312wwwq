import { scrollbarStyles } from '../../../createTheme';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',

    fontSize: 20,
    color: theme.palette.text.primary,
  },
  scroll: {
    maxHeight: 'calc(100%-76px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    ...scrollbarStyles,
  },
  nowrap: {
    whiteSpace: 'nowrap',
    padding: '4px 8px 4px 8px',
  },
  string: {
    padding: '4px 8px 4px 8px',
    maxWidth: '50%',
    wordBreak: 'break-all',
    minWidth: '66px',
  },
  text: {
    fontSize: '16px',
    marginLeft: theme.spacing.unit * 6,
    marginTop: theme.spacing.unit * 2,
  },
});

export default styles;
