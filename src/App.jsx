import React from 'react';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./components/About/About"
import Skills from "./components/skills"
import Work from "./components/Work"
import Contact from './components/contact/Contact';
import Footer from "./components/Footer"
import ScrollUp from "./components/ScrollUp"

const App = () => {
  return (
    <>
      <Navbar/>

      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
};

export default App;