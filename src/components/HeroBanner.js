import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../App.css';

const HeroBanner = () => (
  <Box textAlign="center" sx={{ mt: { lg: '50px', xs: '30px' }, ml: { sm: '0px' } }} position="relative" p="0px">
    <Typography className="title" color="black" fontWeight="600" fontSize="80px" fontFamily="'Stick No Bills', sans-serif">BE THE BEAST</Typography>
    <Typography fontWeight={700} textAlign="center" sx={{ fontSize: { lg: '34px', xs: '30px' } }} mb="23px" mt="30px">
      Dont Stop <br />
      Until You Try
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" textAlign="center">
      Check out the most effective exercises
    </Typography>
    <Stack alignItems="center">
      <a href="#exercises" style={{ marginTop: '45px', alignItems: 'center', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'Blue', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '20px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#8d7dff" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
  </Box>
);

export default HeroBanner;
