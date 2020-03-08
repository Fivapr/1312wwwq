import { scrollbarStyles } from '../../../createTheme';

const styles = theme => {
  return {
    dialog: {
      width: 400,
      height: 360,
      ...scrollbarStyles,
      overflowY: 'hidden',
      overflowX: 'hidden',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    title: {
      textAlign: 'center',
    },
    listItem: {
      width: 280,
      overflowX: 'hidden',
    },
    label: {
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    selectedLabel: {
      color: `${theme.palette.secondary.main}!important`,
    },
    overflowHidden: {
      overflow: 'hidden',
    },
    formContainer: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
    form: {
      paddingTop: theme.spacing.unit,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    input: {
      fontSize: 12,
      margin: theme.spacing.unit,
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
      alignSelf: 'flex-end',
      width: '100%',
      margin: theme.spacing.unit,
    },
    addAccountButton: {
      position: 'absolute',
      bottom: theme.spacing.unit * 3,
      right: theme.spacing.unit * 3,
      backgroundColor: theme.type === 'dark' ? '#666' : '#bbb',
    },

    // rewrite to empty
    cssFocused: {},
    notchedOutline: {},
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: theme.palette.secondary.main,
      },
    },
  };
};

export default styles;
