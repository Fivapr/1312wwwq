const style = theme => ({
  '@global': {
    body: {
      width: ' 100vw!important',
      height: '100vh!important',
      margin: 0,
      padding: 0,
      fontFamily: " 'Roboto', sans-serif",
      '-webkit-user-select': 'none',
      background: `${theme.palette.background.default}`
    },
    html: {
      background: `${theme.palette.background.default}`,
      height: '100%!important'
    },

    ol: {
      listStyle: 'none outside none'
    },
    ul: {
      listStyle: 'none outside none'
    },
    li: {
      listStyle: 'none'
    },
    '.react-grid-layout': {
      background: theme.palette.background.main
    },
    '.layoutJSON': {
      marginTop: 10,
      padding: 10
    },
    '.columns': {
      columns: 120
    },
    '.react-grid-item': {
      boxSizing: 'border-box'
    },
    '.react-grid-item:not(.react-grid-placeholder)': {},
    '.react-grid-item.resizing': {
      opacity: 0.9
    },

    '.react-grid-item .text': {
      fontSize: 24,
      textAlign: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      height: 24
    },
    '.react-grid-item .minMax ': {
      fontSize: 12
    },
    '.react-grid-item .add': {
      cursor: 'pointer'
    },
    '.react-grid-dragHandleExample': {
      cursor: 'move'
    },
    'li b': {
      fontSize: 19,
      lineHeight: 14
    },

    '.react-grid-item.cssTransforms': {
      transitionProperty: 'transform'
    },
    ' .react-grid-item.resizing ': {
      zIndex: 1,
      willChange: 'width, height'
    },

    '.react-grid-item.react-draggable-dragging': {
      transition: 'none',
      zIndex: 3,
      willChange: 'transform'
    },

    '.react-grid-item.react-grid-placeholder': {
      background: 'red',
      opacity: 0.2,
      transitionDuration: '100ms',
      zIndex: 2,
      userSelect: 'none'
    },

    ' .react-grid-item > .react-resizable-handle ': {
      position: 'absolute',
      width: 20,
      height: 20,
      bottom: 0,
      right: 0,
      background: ` url(
        'data:image/svg+xml,base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4='
      )`,
      'background-position': 'bottom right',
      padding: '0 3px 3px 0',
      backgroundRepeat: 'no-repeat',
      backgroundOrigin: 'content-box',
      boSsizing: 'border-box',
      cursor: 'se-resize'
    }
  },

  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  },

  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },

  leftMenu: {
    height: '100%',
    width: 64,
    background: theme.palette.background.paper
  }
})

export default style
