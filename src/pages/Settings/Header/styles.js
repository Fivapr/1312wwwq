const styles = theme => {
  return {
    header: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100%',
      paddingLeft: '30px',
      fontSize: 20,
      '-webkit-app-region': 'drag',
      color: theme.palette.text.primary,
    },
  };
};

export default styles;
