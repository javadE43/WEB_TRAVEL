import React from 'react'
import {Link} from 'react-router-dom';
import './button.css';

const STYLES = ['btn-primary','btn-outline'];
const SIZES=['btn-medium','btn-larg'] ;


function Button({children ,type,onClick,buttonStyle,buttonSize}) {
      
    const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkButtonSIZE=SIZES.includes(buttonStyle)?buttonStyle:SIZES[0]

  return (
      <>
         <Link to='/sign-up' className='btn-mobile'>
           <button 
           className={`btn ${buttonStyle}${buttonSize}`}
           type={type}
           onClick={onClick}
           >
               {children}
           </button>
         </Link>
      </>
  )
}

export default Button