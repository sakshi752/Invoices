import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { motion } from 'framer-motion';

const Center = () => {
    const [isDropDown, setIsDropDown] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);

    const transition = {
        type: "spring",
        stiffness: 200,
        damping: 15,  // Adjust damping to control bounciness
        duration: 1
    }

    return (
        <div>
            <div className='dark:bg-[#141625] scrollbar-hide duration-300 min-h-screen bg-[#f8f8fb] py-[34px] px-2 md:px-8 lg:px-12 lg:py-[72px] w-full'>
                <div className='max-w-4xl flex flex-col mx-auto my-auto'>
                    {/* header */}
                    <div className='w-full flex flex-col md:flex-row items-center justify-between border-b pb-4 border-[#7C5DFA] gap-7'>
                        {/* left */}
                        <div className='flex flex-col gap-2 items-center md:items-start'>
                            <h1 className='dark:text-white text-3xl md:text-4xl font-semibold tracking-widest'>Invoices</h1>
                            <p className='text-gray-500 text-sm'>There are 7 total invoices.</p>
                        </div>
                        {/* right */}
                        <div className='flex justify-between items-center gap-5 md:gap-7'>
                            {/* filter button */}
                            <div className='flex items-center gap-1 md:gap-2 relative'>
                                {/* filter */}
                                <p className=' dark:text-white font-medium'>
                                    Filter
                                </p>
                                <motion.div
                                    onClick={() => setIsDropDown(!isDropDown)}
                                    initial={{ rotate: '0deg' }}
                                    animate={{ rotate: isDropDown ? '180deg' : '0deg' }}
                                    transition={transition}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    <IoIosArrowDown className='text-[#7C5DFA] font-bold text-lg' />
                                </motion.div>
                                {
                                    isDropDown && (
                                        <div className='absolute top-10 text-white bg-[#7C5DFA]  shadow-2xl px-2 py-1 rounded'>
                                            <p>all</p>
                                            <p>paid</p>
                                            <p>pending</p>
                                            <p>draft</p>
                                        </div>
                                    )
                                }
                            </div>
                            {/* add invoice button */}
                            <div>
                                <button className='flex items-center text-white font-medium bg-[#7C5DFA] p-1 rounded cursor-pointer gap-2'>
                                    <FiPlus className='text-[#7C5DFA] font-bold text-lg bg-white rounded' />
                                    Invoice
                                </button>

                            </div>
                        </div>
                    </div>
                    {/* cards container */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Center;
