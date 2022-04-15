import {Link,Route,Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';
import HeroSection from './components/herosection/HeroSection';
import Pages from './pages/Pages';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Pages></Pages>
      
      
    </>
  );
}

export default App;
