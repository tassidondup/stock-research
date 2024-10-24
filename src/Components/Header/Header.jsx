import React from 'react'
import styles from './Header.module.css'
import {ReactComponent as Logo} from '../../assets/icons/asx.svg'
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
        <span>$tock</span>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.user}>
          T
        </div>
        <span>Tashi Dhondup</span>
      </div>
    </header>
  )
}

export default Header