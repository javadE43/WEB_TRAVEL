import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Services from './Services';
import SignUp from './SignUp';
function Pages() {
  return (
 <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/services' element={<Services></Services>}></Route>
     <Route path='/products' element={<Products></Products>}></Route>
     <Route path='/sign-up' element={<SignUp></SignUp>}></Route>

 </Routes>
  )
}

export default Pages