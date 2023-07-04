import { ChildrenComponent } from '@/models';
import { Box } from '@mui/material';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Footer, Navbar, SideBar } from '../ui';

import { useContext } from 'react';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkThme } from '@/themes';
import { UIContext, UIProvider } from '@/context/ui';

const BaseLayout: React.FC<ChildrenComponent> = ({ children, title, meta }) => {
  const { theme, setTheme } = useContext(UIContext);
  const actualTheme = theme === 'light' ? lightTheme : darkThme;
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      setTheme('dark');
    }
  }, []);
  const complexTitle = `${title} - OpenJira`;
  return (
    <>
      <Head>
        <title>{complexTitle}</title>
        <meta name="description" content={meta?.description || 'Jira'} />
      </Head>

      <>
        <ThemeProvider theme={actualTheme}>
          <CssBaseline />
          <Box>
            <Navbar title={title || ''} />
            <Box component="main" sx={{ padding: '10px 20px' }}>
              {children}
            </Box>
            <SideBar />
            <Footer />
          </Box>
        </ThemeProvider>
      </>
    </>
  );
};

export default BaseLayout;
