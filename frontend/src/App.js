import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { SideBar, ToolBar, ViewerContainer } from './components';
import ApolloClientProvider from './apollo';

const defaultTheme = createTheme();

export default function App() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ApolloClientProvider>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
          <CssBaseline />
          <ToolBar open={open} toggleDrawer={toggleDrawer} />
          <ViewerContainer />
        </Box>
      </ThemeProvider>
    </ApolloClientProvider>
  );
}
