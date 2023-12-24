import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./ActivePage.module.css"
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import DebitCard from '../Debitcardcomponent/DebitCard';

function ActivePage2({setActivePage}) {
    const handleNext = () => {
        setActivePage(ActivePage1+1)
    }
  return (
    <div className={styles.form}>
      <DebitCard />
      
      <div className={styles.btnWrapper}>
      <Button variant="outlined" color='success' onClick={handleNext}>BACK</Button>
      {/* <Button variant="contained" color='success' onClick={handleNext}>NEXT</Button> */}
      </div>
    </div>
  )
}

export default ActivePage2
