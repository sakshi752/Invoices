import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { IoIosArrowForward } from "react-icons/io";

const Center = () => {
    const [isDropDown, setIsDropDown] = useState(false);
    const filter = ['paid', 'pending', 'draft'];
    const [filterVal, setFilterVal] = useState('');

    const transition = {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1
    };

    const dropdownVariants = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.5
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.5,
                // delay: 0.3
            },
            transitionEnd: {
                display: "none"
            }
        }
    };

    const handleFilterClick = (item) => {
        if (filterVal === item) {
            setFilterVal('');
        } else {
            setFilterVal(item);
        }
        setIsDropDown(false)
    };

    const invoices = useSelector((state) => state.invoices.allInvoices);
    console.log(invoices)

    return (
        <div>
            <div className='dark:bg-[#141625] scrollbar-hide duration-300 min-h-screen bg-[#f8f8fb] py-[34px] px-2 md:px-8 lg:px-12 lg:py-[72px] w-full'>
                <div className='max-w-3xl flex flex-col mx-auto my-auto'>
                    {/* header */}
                    <div className='w-full flex items-center justify-between border-b pb-4 border-[#7C5DFA]  md:gap-7'>
                        {/* left */}
                        <div className='flex flex-col md:gap-2 items-start'>
                            <h1 className='dark:text-white text-lg md:text-4xl font-semibold tracking-widest'>Invoices</h1>
                            <p className='text-gray-500 text-sm md:text-md font-light'>There are 7 total invoices.</p>
                        </div>
                        {/* right */}
                        <div className='flex justify-between items-center gap-2 md:gap-7'>
                            {/* filter button */}
                            <div className='flex items-center gap-1 md:gap-2 relative'>
                                {/* filter */}
                                <p className='dark:text-white font-medium'>
                                    Filter
                                </p>
                                {/* animation of dropdown button */}
                                <motion.div
                                    onClick={() => setIsDropDown(!isDropDown)}
                                    initial={{ rotate: '0deg' }}
                                    animate={{ rotate: isDropDown ? '180deg' : '0deg' }}
                                    transition={transition}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    <IoIosArrowDown className='text-[#7C5DFA] font-bold text-lg' />
                                </motion.div>

                                {/* animation of drop down list */}
                                <motion.div
                                    initial="exit"
                                    animate={isDropDown ? "enter" : "exit"}
                                    variants={dropdownVariants}
                                    className='absolute top-10 text-white bg-[#7C5DFA] shadow-2xl px-2 pr-5 py-1 rounded'
                                >
                                    {filter.map((item, i) => (
                                        <div
                                            onClick={() => handleFilterClick(item)}
                                            key={i} className='flex gap-4 items-center cursor-pointer'
                                        >
                                            <input
                                                type="checkbox"
                                                checked={filterVal === item}
                                                readOnly
                                            />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </motion.div>

                            </div>
                            {/* add invoice button */}
                            <div>
                                <button className='flex items-center text-white font-medium bg-[#7C5DFA] p-2 md:p-1 rounded cursor-pointer gap-2'>
                                    <FiPlus className='text-[#7C5DFA] font-bold text-lg bg-white rounded' />
                                    <span className='hidden md:hidden'>
                                        Invoice
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* cards container */}
                    <div className='flex flex-col gap-5 mt-8'>
                        {invoices.map((invoice, index) => (
                            <motion.div
                                key={invoice.id}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
                                // exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className='dark:text-white flex justify-between ease-in-out duration-100 dark:bg-[#1E2139] bg-white py-4 px-6 rounded hover:border border-[#7C5DFA]'>
                                    <div className='flex items-center gap-6'>
                                        <h1>#{invoice.id}</h1>
                                        <p className='text-sm text-gray-400 font-light'>{invoice.paymentDue}</p>
                                        <p className='text-sm text-gray-400 font-light'>{invoice.clientName}</p>
                                    </div>
                                    <div className='flex items-center '>
                                        <p>{invoice.total}</p>
                                        <p className='bg-green-50 p-2 rounded ml-6 text-green-500'>{invoice.status}</p>
                                        <IoIosArrowForward className='text-[hsl(252,94%,67%)] ml-3'/>
                                    </div>

                                </div>
                            </motion.div>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Center;
