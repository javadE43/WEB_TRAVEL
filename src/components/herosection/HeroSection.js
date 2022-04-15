import React from 'react';
import {} from 'react-icons'
import { FaPlayCircle } from 'react-icons/fa';
import '../../App.css';
import Button from '../button/Button';
import './herosection.css';

import Styled from 'styled-components';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='videos/video-1.mp4' autoPlay loop muted/>
        <h1>ماجراجویی</h1>
        <p>منتظر چی هستی؟</p>
        <div className='hero-btns'>
             <Button className='btns' buttonStyle='btn-outline' buttonSize='btn-medium' >شروع کنید</Button>
             <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large' >تریلر را تماشا کنید <Faiconplay></Faiconplay></Button>

        </div>
    </div>
  )
}


const Faiconplay=Styled(FaPlayCircle)`
   margin-left:8px;

`;

export default HeroSection