import { scrollbarStyles } from '../../../../createTheme';

const styles = theme => {
  return {
    dialog: {
      width: '100%',
      height: '100%',
      ...scrollbarStyles,
      overflowY: 'hidden',
      overflowX: 'hidden',

      padding: theme.spacing.unit * 6,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      boxSizing: 'border-box',
    },

    text: {
      textAlign: 'center',
      marginBottom: 50,
    },

    red: {
      color: 'red',
    },

    center: {
      display: 'flex',
      justifyContent: 'center',
      alignitems: 'center',
    },

    table: {
      display: 'flex',
      flex: 7,
      flexDirection: 'column',
      justifyContent: 'space-around',
      color: theme.palette.text.primary,
    },

    balance: {
      fontSize: 16,
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
    },

    buttonsContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
    },
    button: {
      alignSelf: 'flex-end',
      width: '100%',
      margin: theme.spacing.unit,
      whiteSpace: 'nowrap',
      marginTop: 50,
    },

    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
    },

    card: {
      backgroundColor: theme.palette.background.settings,
      flex: 1,
      margin: 5,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
};

export default styles;
