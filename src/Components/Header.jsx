import React, { useState } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CgGirl } from "react-icons/cg";
import useTheme from '../hooks/useTheme';
import { motion } from "framer-motion";
import avatar from '../assets/avatar.jpg'

const Header = () => {
    const [colorTheme, setTheme] = useTheme();
    const [darkSide, setDarkSide] = useState(
        colorTheme === 'light' ? true : false
    );

    const toggleDarkMode = () => {
        setTheme(colorTheme);
        setDarkSide(!darkSide);
    };
    const transition = {
        type: "spring",
        stiffness: 200,
        damping: 10
    };


    return (
        <div>
            <header className='lg:hidden h-[80px] z-50 duration-300 ease-in-out p-4 dark:bg-[#1e2139] bg-[#373b53] flex items-center justify-between'>
                {/* logo */}
                <div>
                    <h1 className='text-white text-2xl'>Invoices</h1>
                </div>
                <div className='flex items-center'>
                    {/* darkmode lightmode button */}
                    {
                        colorTheme === 'light' ?
                            <motion.div
                                className='cursor-pointer '
                                onClick={toggleDarkMode}
                                initial={{ scale: 0.6, rotate: 90 }}
                                animate={{ scale: 1, rotate: 360, transition }}
                                whileTap={{ scale: 0.9, rotate: 15 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MdDarkMode className='text-3xl text-white' />
                            </motion.div>
                            :
                            <motion.div
                                className='cursor-pointer ' onClick={toggleDarkMode} whileTap={{ scale: 0.9, rotate: 15 }} initial={{ rotate: 45 }} animate={{ rotate: 360, transition }}
                            >
                                <MdLightMode className='text-3xl text-white' />
                            </motion.div>
                    }
                    <div className=' h-[80px] border-dotted border-l border-[#494e6e] mx-6'>
                        {/* border */}
                    </div>
                    <div>
                        <CgGirl className='text-4xl text-pink-400' />
                    </div>
                </div>
            </header>
            <div className='z-50 hidden lg:block'>
                <div className='fixed top-0 left-0 w-[110px] h-screen dark:bg-[#1e2139] bg-[#373b53] flex flex-col justify-between duration-300 ease-in-out'>
                    <div>
                        <h1 className='text-white text-2xl px-2 pt-5 font-semibold'>Invoices</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        {/* darkmode lightmode button */}
                        {
                            colorTheme === 'light' ?
                                <motion.div
                                    className='cursor-pointer '
                                    onClick={toggleDarkMode}
                                    initial={{ scale: 0.6, rotate: 90 }}
                                    animate={{ scale: 1, rotate: 360, transition }}
                                    whileTap={{ scale: 0.9, rotate: 15 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <MdDarkMode className='text-3xl text-white' />
                                </motion.div>
                                :
                                <motion.div
                                    className='cursor-pointer ' onClick={toggleDarkMode} whileTap={{ scale: 0.9, rotate: 15 }} initial={{ rotate: 45 }} animate={{ rotate: 360, transition }}
                                >
                                    <MdLightMode className='text-3xl text-white' />
                                </motion.div>
                        }
                        <div className=' w-full border-dotted border-b-[3px] border-[#494e6e] my-6 '>
                            {/* border */}
                        </div>
                        <div>
                            <img src={avatar} className='h-14 mb-3 rounded-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
