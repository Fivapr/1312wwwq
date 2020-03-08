import { createMuiTheme } from '@material-ui/core/styles'

export const scrollbarStyles = {
  '&::-webkit-scrollbar': {
    width: '8px',
    height: '8px'
  },

  '&::-webkit-scrollbar-track': {
    // boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.3)',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'darkgrey',
    outline: '1px solid slategrey'
  }
}

const createTheme = (currentTheme = 'dark') => {
  const theme = createMuiTheme({
    props: {
      MuiPaper: {
        square: true
      }
    },
    typography: {
      useNextVariants: true
    },
    spacing: {
      unit: 4
    },
    palette: {
      type: currentTheme,
      primary: {
        main: currentTheme === 'dark' ? '#222222' : '#3F51B5'
      },
      fontTableColor: currentTheme === 'dark' ? '#bbb' : '#444',
      hover: currentTheme === 'dark' ? '#444' : 'rgba(34, 34, 34, 0.08)',
      orderTextColor: '#444',
      secondary: {
        main: currentTheme === 'dark' ? '#fff' : '#3F51B5',
        light: currentTheme === 'dark' ? '#555' : '#ddd'
      },
      active: currentTheme === 'dark' ? 'orange' : '#3F51B5',
      exchangeButtonColor: currentTheme === 'dark' ? '#555' : '#ddd',
      exchangeButtonHoverColor: currentTheme === 'dark' ? '#666' : '#ccc',
      background: {
        paper: currentTheme === 'dark' ? '#222' : '#fff',
        default: currentTheme === 'dark' ? '#000' : '#fafafa',
        topHeader: currentTheme === 'dark' ? '#222' : '#3F51B5',
        settings: currentTheme === 'dark' ? '#333' : '#fff'
      },
      text: {
        primary: currentTheme === 'dark' ? '#fff' : '#222',
        reverse: currentTheme === 'dark' ? '#fff' : '#fff',
        headerFontColor: 'rgba(0, 0, 0, 0.85)'
      },
      iconButton:
        currentTheme === 'dark'
          ? 'rgba(255, 255, 255, 0.7)'
          : 'rgba(0, 0, 0, 0.54)',
      borderButton: currentTheme === 'dark' ? '#000' : '#fafafa',
      redBacklight: 'rgba(233, 90, 90, 0.07) !important',
      greenBacklight: 'rgba(102, 204, 98, 0.07) !important',
      red: currentTheme === 'dark' ? 'rgb(233, 90, 90)' : '#8B0000',
      green: currentTheme === 'dark' ? 'rgb(102, 204, 98)' : '#006400',
      lightenRed:
        currentTheme === 'dark'
          ? 'rgba(233, 90, 90, 0.7)'
          : 'rgba(137, 0, 0, 0.7)',
      lightenGreen:
        currentTheme === 'dark'
          ? 'rgba(102, 204, 98, 0.7)'
          : 'rgba(0, 100, 0, 0.7)'
    }
  })

  return theme
}
export default createTheme
