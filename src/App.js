// React imports
import React, { Component } from 'react';
import './App.css';

// Material-UI imports
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';

// Standard imports
import IndexPage from './IndexPage';

class App extends Component {
  render() {
      return (
          // This injects the theme for use in the children components
          <MuiThemeProvider theme={theme}>
              <IndexPage />
          </MuiThemeProvider>
      );
  }
}

export default App;
