import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { FaTypo3,FaAlignJustify,FaTimes,FaInstagram, FaFacebookSquare, FaYoutubeSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';

import './footer.css';
function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'> 
           <p className='footer-subscription-heading'>
           بعداً به اخبار ماجراجویی بپیوندید تا بهترین معاملات تعطیلات ما را دریافت کنید
           </p>
           <p className='footer-subscription-heading'>
           می توانید در هر زمانی اشتراک خود را لغو کنید 
          </p>
           <div className='input-areas'>
              <form>
                  <input type='email' name='email'  className='footer-input'
                  placeholder='Email'
                  />
                  <Button buttonStyle='btn--outline'>subscrap</Button>
              </form>
           </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>درباره ما</h2>
                    <Link to='/sign-up'>چگونه کار می کند</Link>
                    <Link to='/'>گواهینامه ها</Link>
                    <Link to='/'>مشاغل</Link>
                    <Link to='/'>سرمایه گذاران</Link>
                    <Link to='/'>شرایط استفاده از خدمات</Link>  
                </div>
                <div className='footer-link-items'>
                    <h2>با ما تماس بگیرید</h2>
                    <Link to='/'>مخاطب</Link>
                    <Link to='/'>پشتیبانی</Link>
                    <Link to='/'>مقاصد</Link>
                    <Link to='/'>حمایت های مالی</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>فیلم های</h2>
                    <Link to='/sign-up'>ارسال ویدیو</Link>
                    <Link to='/'>سفیران</Link>
                    <Link to='/'>آژانس</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>رسانه های اجتماعی</h2>
                    <Link to='/sign-up'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>youtube</Link>
                    <Link to='/'>twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                      ماجرا <FaTypo3></FaTypo3>
                    </Link>
                </div>
                <small className='website-right'> ماجرا 2020</small>
                <div className='social-icons'>
                        <Link to='/' target='-blank' aria-label="facebook" className='social-icon-link facebook'><FaFacebookSquare></FaFacebookSquare></Link>
                        <Link to='/' target='-blank' aria-label="instagram" className='social-icon-link instagram'><FaInstagram></FaInstagram></Link>
                        <Link to='/' target='-blank' aria-label="youtube" className='social-icon-link youtube'><FaYoutubeSquare></FaYoutubeSquare></Link>
                        <Link to='/' target='-blank' aria-label="twitter" className='social-icon-link twitter'><FaTwitter></FaTwitter></Link>
                        <Link to='/' target='-blank' aria-label="linkedin" className='social-icon-link linkedin'><FaLinkedin></FaLinkedin></Link>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer