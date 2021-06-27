import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#ee4828',
      main: '#d70040',
      dark: '#9a2a2a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7cfc00',
      main: '#32cd32',
      dark: '#006400',
      contrastText: '#000',
    },
      openTitle: '#3f4771',
      protectedTitle: pink['400'],
      type: 'light'
    }
  })

  export default theme