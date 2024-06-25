import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from './Components/Header';

function App() {


  return (
    <div className='dark:bg-[#141625] duration-300 min-h-screen bg-[#f8f8fb] tracking-widest overflow-x-hidden'>
      <Header />

        <Outlet />

    </div>
  );
}

export default App;
