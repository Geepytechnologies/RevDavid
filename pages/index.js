import React,{useEffect} from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Navslide from '../components/Navslide';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Theman from '../components/Theman';
import Mandate from '../components/Mandate';
import Parallax from '../components/Parallax';


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Theman />
      <Mandate />
      <Parallax />
      <Footer />
       
    </div>
  )
}
