import React from 'react'
import Header from './components/header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/footer';


const App = () =>{
  return (
    <div>
    <Header/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
    
  );
}

export default App;
