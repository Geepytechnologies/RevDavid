import React,{useEffect} from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../components/About';


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <About />
      <Footer />
       
    </div>
  )
}
