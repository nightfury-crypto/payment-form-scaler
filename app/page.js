"use client"
import DebitCard from '@/components/Debitcardcomponent/DebitCard'
import styles from './page.module.css' 
import TopBar from '@/components/Topbar/TopBar' 
import { useState } from 'react'
import ActivePage1 from '@/components/activepage/ActivePage1'
import ActivePage2 from '@/components/activepage/ActivePage2'

export default function Home() {
  const [activePage, setActivePage] = useState(0)
  return (
    <main className={styles.main}>
      <div className={styles.paymentWrapper}>
        <div className={styles.paymentTop}>
          <TopBar activePage={activePage} />
        </div>

        <div className={styles.payform}>
    {activePage == 0 && <ActivePage1 setActivePage={setActivePage} />}
    {activePage == 1 && <ActivePage2 setActivePage={setActivePage} />}
        </div>  
      </div>
    </main>
  )
}
