import '../App.css';

import React from 'react'
import HeroSection from '../components/herosection/HeroSection';
import Cards from '../components/Cards/Cards';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Cards></Cards>
      <Footer></Footer>
    </>
  )
}

export default Home