import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '150px', margin: '0px 0px 0px 50px' }} />
    </Link>
    <Stack
      direction="row"
      gap="100px"
      fontFamily="notoserif"
      fontSize="24px"
      alignItems="center"
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: 'white' }}>EXERCISES</a>
      <a href="/AboutUs" style={{ textDecoration: 'none', color: 'white' }}>ABOUT US</a>
      <a href="/ContactUs" style={{ textDecoration: 'none', color: 'white' }}>CONTACT US</a>
    </Stack>

  </Stack>
);

export default Navbar;
