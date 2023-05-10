import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import Services from './components/services/services';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Testimonials from './components/testimonials/testimonials';


const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App
