import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import invoiceSlice from '../store/invoice';
import StatusBtn from './StatusBtn';
import { IoIosArrowBack } from "react-icons/io";
import ClientItems from './ClientItems';
import Loading from './Loading'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FcPaid } from "react-icons/fc";
import { motion } from 'framer-motion';
import DeleteModal from './DeleteModal';


const InvoiceInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [deleteModal, setDeleteModal] = useState(false)

    useEffect(() => {
        dispatch(invoiceSlice.actions.getInvoiceById({ id }));
        setLoading(false); // Set loading to false after dispatch
    }, [dispatch, id]);

    const invoice = useSelector((state) => state.invoices.invoiceById);
    console.log(invoice);

    const deleteModalHandler = () => {
        setDeleteModal(!deleteModal);
    }
    const deleteInvoiceHandler = () => {
        navigate('/')
        setDeleteModal(false);
        dispatch(invoiceSlice.actions.deleteInvoice({ id }));
    }
    const updateStatusHandler = () => {
        dispatch(invoiceSlice.actions.updateStatusPaid({ id, status: invoice.status }));
    }

    return (
        <>
            {invoice ? (
                <div
                    className='dark:bg-[#141625] scrollbar-hide duration-300 min-h-screen bg-[#f8f8fb] dark:text-white py-[34px] px-2 md:px-8 lg:px-12 lg:py-[72px] w-full'>
                    <div className='max-w-3xl mx-auto'>
                        <Link to={'/'} className='flex items-center'>
                            <IoIosArrowBack className='text-[hsl(252,94%,67%)] mr-2' />
                            Go back
                        </Link>
                        {/* invoice header */}
                        <div className='flex justify-between mt-6 items-center dark:bg-[#1e2139] bg-white shadow-lg px-7 py-5 rounded-md'>
                            <div className='flex items-center '>
                                <p className='text-gray-600 dark:text-gray-300 '>Status</p>
                                <StatusBtn status={invoice.status} />
                            </div>
                            <div className='hidden md:flex items-center space-x-3 '>
                                <motion.button
                                    transition={{ duration: 0.2 }}
                                    whileTap={{ scale: .8 }}
                                    whileHover={{ scale: 1.1 }}
                                    className='text-[#7e88c3] text-center dark:bg-[#252945] hover:opacity-80  bg-slate-100 p-3 px-2 rounded '>
                                    Edit
                                </motion.button>
                                <motion.button
                                    transition={{ duration: 0.2 }}
                                    whileTap={{ scale: .8 }}
                                    whileHover={{ scale: 1.1 }}
                                    className='bg-red-500 text-white  p-3 px-2 rounded hover:opacity-80'
                                    onClick={deleteModalHandler}
                                >
                                    Delete
                                </motion.button>

                                {invoice.status !== 'paid' && (
                                    <motion.button
                                        transition={{ duration: 0.2 }}
                                        whileTap={{ scale: .8 }}
                                        whileHover={{ scale: 1.1 }}
                                        onClick={updateStatusHandler}
                                        className='bg-green-500 text-white  p-3 px-2 rounded hover:opacity-80'>
                                        Mark as paid
                                    </motion.button>
                                )}

                            </div>
                            {/* hide for large screen */}
                            <div className='flex items-center space-x-5 md:hidden'>
                                <motion.button
                                    transition={{ duration: 0.2 }}
                                    whileTap={{ scale: .8 }}
                                    whileHover={{ scale: 1.1 }}
                                    className='text-[#7e88c3] text-center dark:bg-[#252945] hover:opacity-80  bg-slate- text-xl rounded '>
                                    <FaEdit />
                                </motion.button>
                                <motion.button
                                    transition={{ duration: 0.2 }}
                                    whileTap={{ scale: .8 }}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={deleteModalHandler}
                                    className='bg-red-500 text-white text-xl rounded hover:opacity-80'>
                                    <MdDelete />
                                </motion.button>

                                {invoice.status !== 'paid' && (
                                    <motion.button
                                        transition={{ duration: 0.2 }}
                                        whileTap={{ scale: .8 }}
                                        whileHover={{ scale: 1.1 }}
                                        onClick={updateStatusHandler}
                                        className='bg-green-500 text-white text-xl rounded hover:opacity-80'>
                                        <FcPaid />
                                    </motion.button>
                                )}
                            </div>
                        </div>

                        {/* invoice content */}
                        <div className='flex flex-col justify-between mt-6 dark:bg-[#1e2139] bg-white shadow-lg px-7 py-5 rounded-md'>
                            {/* id, client name and sender's address */}
                            <div className='flex md:justify-between flex-col md:flex-row w-full gap-4'>
                                <div>
                                    <p className='text-xl font-bold '>#{invoice.id}</p>
                                    <p className='text-gray-600 dark:text-gray-300 text-sm mt-2'> Client name: {invoice.clientName}</p>
                                </div>
                                <div className='flex flex-col md:items-end text-gray-600 dark:text-gray-300 text-sm gap-1'>
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
                                        <h1 className='text-xl font-semibold '>{invoice.paymentDue}</h1>
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
                                <div className='flex md:items-start flex-col mt-10 md:mt-0'>
                                    <p className='text-gray-600 dark:text-gray-300 text-sm'>Sent to</p>
                                    <h1 className='text-md font-semibold '>{invoice.clientMail}</h1>
                                </div>
                            </div>

                            <div className='bg-[#f9fafe] dark:bg-[#252945] mt-10 p-7 md:p-10 rounded-lg rounded-b-none'>
                                <ClientItems items={invoice.items} />
                            </div>

                            <div className='dark:bg-black bg-gray-700 text-white rounded-lg rounded-t-none flex justify-evenly py-7 font-semibold'>
                                <p className='text-xl'>Total Payment:</p>
                                <p className='text-2xl'>${invoice.total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Loading />}
            {deleteModal && <DeleteModal deleteModalHandler={deleteModalHandler} deleteInvoiceHandler={deleteInvoiceHandler} />}
        </>

    );
};

export default InvoiceInfo;
