import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Biling Details',
  'Payment Method',
];

export default function HorizontalLinearAlternativeLabelStepper({activePage}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activePage} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel style={{color: "#fff"}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}