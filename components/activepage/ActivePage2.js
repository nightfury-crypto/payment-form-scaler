import React, { useState } from 'react'
import styles from "./ActivePage.module.css"
import Button from '@mui/material/Button';
import DebitCard from '../Debitcardcomponent/DebitCard';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import UPI from '../upimethod/UPI';

function ActivePage2({setActivePage}) {
    const [value, setValue] = useState("")
    const handleBack = () => {
        setActivePage(0)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
  return (
    <div className={styles.form}>
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Payment Method</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        className={styles.radio}
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
        <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
        <FormControlLabel value="upi" control={<Radio />} label="UPI" />
      </RadioGroup>
      </FormControl>
      <div className={styles.visual}>
      {(value === "debit" || value === "credit") && <DebitCard />}
      {value === "upi" && <UPI />}
      </div>
      
      <div className={styles.btnWrapper}>
      <Button variant="outlined" color='success' onClick={handleBack}>BACK</Button>
      {/* <Button variant="contained" color='success' onClick={handleNext}>NEXT</Button> */}
      </div>
    </div>
  )
}

export default ActivePage2
