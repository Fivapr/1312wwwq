const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    '-webkit-app-region': 'drag',
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.paper,
  },
  macHeader: {
    '-webkit-app-region': 'drag',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: theme.palette.background.paper,
    boxSizing: 'border-box',
  },
  text: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: '0 36px',
    textAlign: 'center',
  },
  textField: {
    borderColor: theme.palette.text.primary,
  },
  link: {
    color: theme.palette.active,
    cursor: 'pointer',
  },
  submitButton: {
    marginTop: 24,
    width: 200,
    marginBottom: 40,
  },
  icon: {},
  errorText: {
    color: '#f44336',
    margin: 0,
    fontSize: '0.75rem',
    textAlign: 'left',
    marginTop: 8,
    minHeight: '1em',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: '1em',
  },
  centerForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  helperText: {
    paddingBottom: '10px',
  },
  needLoginText: {
    color: 'green',
  },
});

export default styles;
