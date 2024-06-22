import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import invoiceSlice from '../store/invoice';
import StatusBtn from './StatusBtn';
import { IoIosArrowBack } from "react-icons/io";

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
                <button className='flex items-center'> <IoIosArrowBack className='text-[hsl(252,94%,67%)] mr-2' /> Go back</button>
                {/* invoice header */}
                <div className='flex justify-between mt-6 items-center dark:bg-[#1e2139] bg-white shadow-lg px-3 py-5 rounded-md'>
                    <div className='flex items-center '>
                        <p className='text-gray-600 dark:text-gray-300 '>Status</p>
                        <StatusBtn status={invoice.status} />
                    </div>
                    <div className='flex items-center space-x-3'>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>Mark as paid</button>
                    </div>
                </div>

                {/* invoice content */}
                <div className='flex justify-between mt-6 items-center dark:bg-[#1e2139] bg-white shadow-lg px-3 py-5 rounded-md'>
                    <div className='flex justify-between w-full'>
                        <div>
                            <p>{invoice.id}</p>
                            <p>{invoice.clientName}</p>
                        </div>
                        <div>
                            <p>{invoice.senderAddress.street}</p>
                            <p>{invoice.senderAddress.city}</p>
                            <p>{invoice.senderAddress.postCode}</p>
                            <p>{invoice.senderAddress.country}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceInfo;
