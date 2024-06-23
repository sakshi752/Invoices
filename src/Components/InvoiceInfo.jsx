import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import invoiceSlice from '../store/invoice';
import StatusBtn from './StatusBtn';
import { IoIosArrowBack } from "react-icons/io";
import ClientItems from './ClientItems';


const InvoiceInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(invoiceSlice.actions.getInvoiceById({ id }));
        setLoading(false); // Set loading to false after dispatch
    }, [dispatch, id]);

    const invoice = useSelector((state) => state.invoices.invoiceById);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!invoice) {
        return <div>Invoice not found.</div>;
    }

    return (
        
        <div className='dark:bg-[#141625] scrollbar-hide duration-300 min-h-screen bg-[#f8f8fb] dark:text-white py-[34px] px-2 md:px-8 lg:px-12 lg:py-[72px] w-full'>
            <div className='max-w-3xl mx-auto'>
                <Link to={'/'} className='flex items-center'> <IoIosArrowBack className='text-[hsl(252,94%,67%)] mr-2' /> Go back</Link>
                {/* invoice header */}
                <div className='flex justify-between mt-6 items-center dark:bg-[#1e2139] bg-white shadow-lg px-3 py-5 rounded-md'>
                    <div className='flex items-center '>
                        <p className='text-gray-600 dark:text-gray-300 '>Status</p>
                        <StatusBtn status={invoice.status} />
                    </div>
                    <div className='flex items-center space-x-3'>
                        <button className='text-[#7e88c3] text-center dark:bg-[#252945] hover:opacity-80  bg-slate-100 p-3 px-7 rounded-full '>Edit</button>
                        <button className='bg-red-500 text-white  p-3 px-7 rounded-full hover:opacity-80'>Delete</button>
                        <button className='bg-green-500 text-white  p-3 px-7 rounded-full hover:opacity-80'>Mark as paid</button>
                    </div>
                </div>

                {/* invoice content */}
                <div className='flex flex-col justify-between mt-6 dark:bg-[#1e2139] bg-white shadow-lg px-3 py-5 rounded-md'>
                    {/* id and sender's address */}
                    <div className='flex justify-between w-full'>
                        <div>
                            <p className='text-xl font-bold '>#{invoice.id}</p>
                            <p className='text-gray-600 dark:text-gray-300 text-sm'>{invoice.clientName}</p>
                        </div>
                        <div className='flex flex-col items-end text-gray-600 dark:text-gray-300 text-sm gap-1'>
                            <p>{invoice.senderAddress.street}</p>
                            <p>{invoice.senderAddress.city}</p>
                            <p>{invoice.senderAddress.postCode}</p>
                            <p>{invoice.senderAddress.country}</p>
                        </div>
                    </div>
                    {/* dates and client's info */}
                    <div className=' mt-16 grid grid-cols-2 w-full  md:grid-cols-3'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>Invoice Date</p>
                                <h1 className='text-xl font-semibold '>{invoice.createdAt}</h1>
                            </div>
                            <div>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>Invoice Date</p>
                                <h1 className='text-xl font-semibold '>{invoice.createdAt}</h1>
                            </div>
                        </div>
                        <div>
                            <p className='text-gray-600 dark:text-gray-300 text-sm'>Bill to</p>
                            <p className='text-lg font-semibold '>{invoice.clientName}</p>
                            <div className='flex flex-col mt-2 text-gray-600 dark:text-gray-300 text-sm'>
                                <p>{invoice.clientAddress.street}</p>
                                <p>{invoice.clientAddress.city}</p>
                                <p>{invoice.clientAddress.postCode}</p>
                                <p>{invoice.clientAddress.country}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-gray-600 dark:text-gray-300 text-sm'>Sent to</p>
                            <h1 className='text-md font-semibold '>{invoice.clientEmail}</h1>
                        </div>
                    </div>
                    <div className='bg-[#f9fafe] dark:bg-[#252945] mt-10 p-10 rounded-lg rounded-b-none'>
                        <ClientItems items={invoice.items}/>
                    </div>
                    <div className='dark:bg-black bg-gray-700 text-white rounded-lg rounded-t-none flex justify-evenly py-7 font-semibold'>
                        <p className='text-xl'>Total Payment</p>
                        <p className='text-2xl'>{invoice.total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceInfo;
