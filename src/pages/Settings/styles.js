const style = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 450px minmax(0, 1fr)',
    gridTemplateRows: '48px minmax(0, 1fr) 620px minmax(0, 1fr)',
    backgroundColor: theme.palette.background.default
  },

  header: {
    gridColumn: '1/4',
    gridRow: '1/2',
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    marginLeft: theme.spacing.unit
  },

  left: {
    gridColumn: '1/2',
    gridRow: '2/3',
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    background: theme.palette.background.settings
  },

  right: {
    gridColumn: '2/3',
    gridRow: '3/4',
    margin: theme.spacing.unit
  }
})

export default style
