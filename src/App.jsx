import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from './Components/Header';
import CustomCursor from './Components/CustomCursor';

function App() {


  return (
    <div className='dark:bg-[#141625] duration-300 min-h-screen bg-[#f8f8fb] tracking-widest overflow-x-hidden'>
      <Header />
      <CustomCursor/>
        <Outlet />

    </div>
  );
}

export default App;
