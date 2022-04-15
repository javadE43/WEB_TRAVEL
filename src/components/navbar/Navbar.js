import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FaTypo3,FaAlignJustify,FaTimes } from 'react-icons/fa';
import Button from '../button/Button';
import './navbar.css'



function Navbar() {
  const [click,setclick]=useState(false);
  const [button,setButton]=useState(true);

  const handlerIcons=()=>setclick(!click);
  const closeMobailMenu=()=>setclick(false);

  const showButton=()=>{
    if(window.innerWidth<=960){
      setButton(false);
    }else{
      setButton(true);
    }
    console.log('show')
  };

  useEffect(()=>{
    showButton();
  

  },[]);

  window.addEventListener('resize',showButton);

  return (
    <>
       <nav className='navbar'>
           <div className='navbar-container'>
               <Link to='/' className='navbar-logo' onClick={closeMobailMenu}>
                  ماجرا<FaTypo3/>
               </Link>
               <div onClick={handlerIcons} className='menu-icon'>
                     {click?<FaTimes/>:<FaAlignJustify/>}
               </div>
               <ul className={click?'nav-menu active':'nav-menu'}>

                    <li className='nav-item'>
                      <Link className='nav-links' to='/' onClick={closeMobailMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-links' to='/services' onClick={closeMobailMenu}>Servises</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-links' to='/products' onClick={closeMobailMenu}>Products</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-links-mobile' to='/sign-up' onClick={closeMobailMenu}>sign Up</Link>
                    </li>
               </ul>
               {button && <Button buttonStyle='btn-outline'> SIGN UP</Button>}
           </div>
       </nav>
    </>
  )
}

export default Navbar