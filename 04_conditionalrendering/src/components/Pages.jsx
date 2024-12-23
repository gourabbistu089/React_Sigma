// Page.js
import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

function Pages({ page }) {
  switch (page) {
    case 'home':
      return <Home />;
    case 'about':
      return <About />;
    case 'contact':
      return <Contact />;
    default:
      return <NotFound />;
  }
}

export default Pages;
