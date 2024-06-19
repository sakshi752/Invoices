import React from 'react';
import useTheme from './hooks/useTheme';
import Header from './Components/Header';
import Center from './Components/Center';

function App() {
    const [colorTheme, setTheme] = useTheme();

    return (
        <div className='dark:bg-[#141621] duration-300 min-h-screen bg-[#f8f8fb] tracking-widest overflow-x-hidden'>
            {/* header section */}
            <Header/>
            <Center/>
        </div>
    );
}

export default App;
