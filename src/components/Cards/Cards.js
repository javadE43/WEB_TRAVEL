import React from 'react'
import Carditems from '../carditems/Carditems'
import './card.css';
function Cards() {
  return (
    <div className='cards'>
       
       {/* <h1 className=''> check out these EPIC Destinations</h1> */}
       <h1 className=''>از این مکان ها دیدن کنید</h1>

       <div className='cards__container'>
         <div className='cards__wrapper'>
            <ul className='cards__items'> 
               
               <Carditems
                    src='images/img-9.jpg'
                    // text='Explore the hidden waterfall deep inside the Amazon Jangle'
                    text='آبشار پنهان در اعماق جنگل آمازون را کاوش کنید'

                    label='Adventure'
                    path='/services'
               ></Carditems>
                   <Carditems
                    src='images/img-2.jpg'
                    // text='Travel through the Islands of Bali in a Private Cruise'
                    text='سفر از طریق جزایر بالی در یک سفر دریایی خصوصی'
                    label='Luxury'
                    path='/services'
               ></Carditems>

            </ul>  
            <ul className='cards__items'> 
               
               <Carditems
                    src='images/img-3.jpg'
                    // text='Explore the hidden waterfall deep inside the Amazon Jangle'
                    text='آبشار پنهان در اعماق جنگل آمازون را کاوش کنید'

                    label='Adventure'
                    path='/services'
               ></Carditems>
                   <Carditems
                    src='images/img-4.jpg'
                    // text='Travel through the Islands of Bali in a Private Cruise'
                    text='سفر از طریق جزایر بالی در یک سفر دریایی خصوصی'
                    label='Luxury'
                    path='/services'
               ></Carditems>
                <Carditems
                    src='images/img-8.jpg'
                    // text='Travel through the Islands of Bali in a Private Cruise'
                    text='سفر از طریق جزایر بالی در یک سفر دریایی خصوصی'
                    label='Luxury'
                    path='/sign-up'
               ></Carditems>

            </ul>  
        </div>
       </div>   
    </div>
  )
}

export default Cards