import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
