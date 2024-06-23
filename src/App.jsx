import React from 'react';
import useTheme from './hooks/useTheme';
import Header from './Components/Header';
import Center from './Components/Center';
import { Outlet } from 'react-router-dom';

function App() {
    const [colorTheme, setTheme] = useTheme();

    return (
        <div className='dark:bg-[#141625] duration-300 min-h-screen bg-[#f8f8fb] tracking-widest overflow-x-hidden'>
            {/* header section */}
            <Header/>
            <Outlet/>
        </div>
    );
}

export default App;
