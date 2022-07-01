import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import '../App.css';

const ContactUs = () => {
  useEffect(() => {
    const ifameData = document.getElementById('iframeId');
    const lat = 19.0010232;
    const lon = 72.8397202;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  // eslint-disable-next-line jsx-a11y/iframe-has-title
  return (<Box margin="50px" backgroundColor="white" height="500px" borderRadius="10px"><Typography fontSize="24px" fontWeight="600" padding="80px">Contact Us On:</Typography><Typography fontSize="20px" marginLeft="50px" marginBottom="50px">Phone No: 91846844543</Typography><Typography fontSize="20px" marginLeft="50px" marginBottom="50px">Email Us at: BeTheBeast@gmail.com</Typography><Typography fontSize="20px" marginLeft="50px">Address:Mumbai, NY 10030</Typography><div><iframe id="iframeId" height="300px" width="100%">fgd</iframe></div></Box>
  );
};
export default ContactUs;
