import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DefaultPage from './screens/DefaultPage'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0248CA',
      main: '#023AA2',
      dark: '#012B79'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#CCCCCC',
      dark: '#8F8F8F'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <DefaultPage/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;