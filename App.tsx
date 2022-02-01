import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes/routes';
import theme from './src/themes/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;