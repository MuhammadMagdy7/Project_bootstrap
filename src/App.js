import './App.css';
import { Container } from 'react-bootstrap';
import React, {useEffect, useState}  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar1 from './components/Utility/Navbar';
import Slider from './components/Slider';
import Header from './components/Utility/Header';
import Collection from './components/Collection';
import Special from './components/Special';
import Offer from './components/Offer';
import BlogList from './components/BlogList';
import About from './components/About';
import Popular from './components/Popular';
import Email from './components/Email';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
    
    <Navbar1 />
    <Slider />
    <Header title={'New Collection'} />
    <Collection />
    <Header title={'Special Selection'} />
    <Special />
    <Offer />
    <Header title={'Our Latest Blog'} />
    <BlogList />
    <About />
    <Popular />
    <Email />
    <Footer />

    

    </>
  );
}
export default App;
