import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../../public/logo.svg'

function Navbar() {
  return (
    <nav className={styles.nav}>
        <img src={logo} />
        <h1>my travel journal.</h1>
    </nav>
  )
}

export default Navbar