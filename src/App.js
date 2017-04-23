import React, {Component} from 'react';
import Routes from './routes';
import {red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// theme is not used initially, the nav colors detemine color scheme currently. Go to components/layout/Nav
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: red500,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
