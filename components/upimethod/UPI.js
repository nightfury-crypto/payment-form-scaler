import React from 'react'
import styles from "./UPI.module.css"
function UPI() {
  return (
    <div style={{width: "100%", maxWidth: "300px", display: "flex", justifyContent: "center", flexDirection: "column", gap: "10px", alignItems: "flex-end"}}>
      <input type='text' placeholder='Enter UPI ID' className={styles.upiId} />
      <button className={styles.btn}>Submit</button>
    </div>
  )
}

export default UPI
