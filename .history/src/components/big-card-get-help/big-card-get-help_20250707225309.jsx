import React, { useState } from 'react';

import { Box, Card, Button, Typography } from '@mui/material';

const guidelines = [
  'No matter how skilled you might be, sometimes we all need a little support.',
  'We are here to help you succeed with building your lists.',
  'Get assistance on troubleshooting errors, and can even get to know about building new automation as well.',
  'We will try our best to help you out for every issues.',
  'In case you wish to manage or cancel the subscription, you can do that from the “My Subscriptions” section.',
];

const BigCardGetHelp = () => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card>
      <Box
        sx={{
          width: '100%',
          mt: 3,
          height: '300px',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: 2,
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            width: '58%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight="600" color="#1c252e" sx={{ mb: 1 }}>
              Points To Remember!
            </Typography>

            <Box component="ul" sx={{ mt: 2, pl: 0, listStyle: 'none' }}>
              {guidelines.map((item, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    color: '#637381',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    height: 'auto',
                    mb: 0.5,
                    position: 'relative',
                    pl: '14px',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '8.5px',
                      width: '5px',
                      height: '5px',
                      backgroundColor: '#637381',
                      borderRadius: '50%',
                    },
                  }}
                >
                  {index === guidelines.length - 1 ? (
                    <Box>
                      {item}{' '}
                      <Box
                        component="span"
                        sx={{
                          color: '#078dee',
                          textDecoration: 'underline',
                          fontSize: '14px',
                          fontWeight: 500,
                          display: 'inline',
                          cursor: 'pointer',
                          width: '500px',
                        }}
                      >
                        Learn More
                      </Box>
                    </Box>
                  ) : (
                    item
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Button variant='outlined' color='primary' sx={{width: 10}}>Ask Question</Button>
        </Box>

        {/* Right Side: Image */}
        <Box
          sx={{
            width: '392px',
            height: '203px',
            mt: 0,
            position: 'relative',
          }}
        >
          <img
            style={{ width: '100%', height: '100%', borderRadius: '12px' }}
            src="https://pabbly-email-verification-frontend.vercel.app/assets/images/big-card-thumbhnails/app/get-help-photo.png"
            alt="logo"
          />
        </Box>
      </Box>
    </Card>
  );
};

export default BigCardGetHelp;
