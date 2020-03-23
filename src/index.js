import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import MiniDrawer from './components/Navbar'
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MiniDrawer>
      <App />
    </MiniDrawer> 
  </ThemeProvider>,
  document.querySelector('#root'),
);
