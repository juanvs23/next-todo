import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';
import Link from 'next/link';

const NavbarComponent = ({ title }: { title: string }) => {
  const { setopenMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}
      >
        <IconButton onClick={setopenMenu}>
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" sx={{ textTransform: 'capitalize' }}>
          <Link href={'/'} color="white">
            {title}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
