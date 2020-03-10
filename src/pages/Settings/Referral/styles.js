import { scrollbarStyles } from '../../../createTheme'

const styles = theme => {
  return {
    dialog: {
      width: 400,
      height: 360,
      ...scrollbarStyles,
      overflowY: 'hidden',
      overflowX: 'hidden'
    },

    flex: {
      display: 'flex',
      flexDirection: 'column',
      width: '100px',
      marginLeft: theme.spacing.unit * 4
    },

    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    cell: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      color: theme.palette.text.primary,
      fontSize: 18
    },

    text: {
      margin: theme.spacing.unit * 4,
      color: theme.palette.text.primary,
      fontSize: '15px'
    },

    refCode: {
      margin: theme.spacing.unit * 4,
      marginTop: 0,
      marginLeft: theme.spacing.unit * 6,
      width: '85%'
    }
  }
}

export default styles
