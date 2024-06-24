import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Components/Header';

function App() {
  const location = useLocation();

  return (
    <div className='dark:bg-[#141625] duration-300 min-h-screen bg-[#f8f8fb] tracking-widest overflow-x-hidden'>
      <Header />
      <AnimatePresence mode='wait'>
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </div>
  );
}

export default App;
