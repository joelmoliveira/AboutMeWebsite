import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Button from '../Button/Button';

// Content
import contentEnglish from '../../../src/Content/contentEnglish.json';
import image1 from '../../images/image1.jpg'

const CTA = () => {
  return (
    <Box sx={{ my: 10 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ pr: { xs: 0, md: 4 }, paddingLeft: '2rem', marginLeft: '2rem' }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {contentEnglish.landingPage.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              {contentEnglish.landingPage.subtitle}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Button variant="contained" color="primary" sx={{ mb: 2, width: '200px' }}>
                {contentEnglish.landingPage.ctaButton}
              </Button>
              <Button variant="contained" color="primary" sx={{ width: '200px' }}>
                {contentEnglish.landingPage.downloadCV}
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={image1} alt="CTA Image" style={{ width: '100%' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CTA;
