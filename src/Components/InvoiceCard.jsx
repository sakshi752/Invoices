import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import StatusBtn from './StatusBtn';
import { Link } from 'react-router-dom';

const InvoiceCard = ({ invoice }) => {
    return (
        <>
            <div className='hidden md:flex dark:text-white shadow-lg  justify-between ease-in-out duration-100 dark:bg-[#1E2139] bg-white py-4 px-6 rounded hover:border border-[#7C5DFA]'>
                <div className='flex items-center gap-6'>
                    <h1>#{invoice.id}</h1>
                    <p className='text-sm text-gray-400 font-light'>{invoice.paymentDue}</p>
                    <p className='text-sm text-gray-400 font-light'>{invoice.clientName}</p>
                </div>
                <div className='flex items-center '>
                    <p>{invoice.total}</p>
                    <StatusBtn status={invoice.status} />
                    <IoIosArrowForward className='text-[hsl(252,94%,67%)] ml-3' />
                </div>

            </div>
            <div className='md:hidden flex dark:text-white shadow-lg  justify-between ease-in-out duration-100 dark:bg-[#1E2139] bg-white py-4 px-6 rounded hover:border border-[#7C5DFA]'>
                <div className='flex flex-col gap-1'>
                    <h1>#{invoice.id}</h1>
                    <p className='text-sm text-gray-400 font-light'>{invoice.paymentDue}</p>

                    <p>{invoice.total}</p>
                </div>
                <div className='flex flex-col items-end gap-1'>
                    <IoIosArrowForward className='text-[hsl(252,94%,67%)] ml-3' />
                    <p className='text-sm text-gray-400 font-light'>{invoice.clientName}</p>
                    <StatusBtn status={invoice.status} />
                    
                </div>
            </div>
        </>
    )
}

export default InvoiceCard
