import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import AddNewItem from './AddNewItem';

const CreateInvoice = ({ openCreateInvoice, setOpenCreateInvoice }) => {
    const menuRef = useRef();

    // sender's info
    const [senderStreet, setSenderStreet] = useState('');
    const [senderCity, setSenderCity] = useState('');
    const [senderPostCode, setSenderPostCode] = useState('');
    const [senderCountry, setSenderCountry] = useState('');

    // client's info
    const [clientName, setClientName] = useState('');
    const [clientMail, setClientMail] = useState('');
    const [clientStreet, setClientStreet] = useState('');
    const [clientCity, setClientCity] = useState('');
    const [clientPostCode, setClientPostCode] = useState('');
    const [clientCountry, setClientCountry] = useState('');

    const deliveryTimes=[1,7,14,30];

    // info related to the items
    const [description, setDescription] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [paymentTerms, setpaymentTerms] = useState(deliveryTimes[0]);

    const [item, setItem] = useState([{
        "id": Date.now(),
        'name': "",
        'quantity': 1,
        'price': 0,
        'total': 0,
    }]);

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                if (e.target.closest('#invoice-header')) {
                    // Clicked on the header or its children, do nothing
                    return;
                }
                setOpenCreateInvoice(false);
            }
        };

        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [setOpenCreateInvoice]);

    const addItem = () => {
        setItem(prevItems => [...prevItems, {
            "id": Date.now(),
            'name': "",
            'quantity': 1,
            'price': 0,
            'total': 0,
        }]);
    };

    const removeItem = (id) => {
        const updatedItems = item.filter(item => item.id !== id);
        setItem(updatedItems);
    };

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-[#000005be]'>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ x: -500, opacity: 0 }}
                animate={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 40, duration: 1 } }}
                exit={{ x: -700, transition: { duration: .7 } }}
                className='flex flex-col dark:text-white dark:bg-[#141625] bg-white md:pl-[150px] py-16 px-6 h-screen md:w-[768px] md:rounded-r-3xl'
                ref={menuRef}
            >
                <div className='fixed top-10 w-full flex justify-between'>
                    <h1 className='text-3xl font-semibold'>Create Invoice</h1>
                </div>
                <form className='flex flex-col mt-16 mb-16 pb-3 space-y-6 overflow-y-scroll scrollbar-hide'>
                    {/* Bill from */}
                    <div>
                        <h1 className='text-lg font-semibold mb-2 text-[#7C5DFA]'>Bill From</h1>
                        <div className='grid grid-cols-3 gap-4'>
                            <input
                                type='text'
                                className='border-2 col-span-3 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder="Sender's address"
                                value={senderStreet}
                                onChange={(e) => setSenderStreet(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border-2 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder='City'
                                value={senderCity}
                                onChange={(e) => setSenderCity(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border-2 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder='Post Code'
                                value={senderPostCode}
                                onChange={(e) => setSenderPostCode(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border-2 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder='Country'
                                value={senderCountry}
                                onChange={(e) => setSenderCountry(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Bill to */}
                    <div>
                        <h1 className='text-lg font-semibold mb-2 text-[#7C5DFA]'>Bill To</h1>
                        <div className='grid grid-cols-3 gap-4'>
                            <input
                                type='text'
                                className='border-2 col-span-3 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder='Client Name'
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border-2 col-span-3 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder='Client Email'
                                value={clientMail}
                                onChange={(e) => setClientMail(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border-2 col-span-3 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder="Client's Address"
                                value={clientStreet}
                                onChange={(e) => setClientStreet(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border-2 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder='City'
                                value={clientCity}
                                onChange={(e) => setClientCity(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border-2 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder='Pin Code'
                                value={clientPostCode}
                                onChange={(e) => setClientPostCode(e.target.value)}
                            />
                            <input
                                type='text'
                                className='border-2 py-2 px-4 rounded-md focus:outline-none focus:border-[#7C5DFA]'
                                placeholder='Country'
                                value={clientCountry}
                                onChange={(e) => setClientCountry(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* date, time limit and description */}
                    <div className='grid grid-cols-2 gap-4'>
                        <input
                            value={deliveryDate}
                            onChange={(e) => setDeliveryDate(e.target.value)}
                            type='date' className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA]' placeholder='Date' />
                        <select
                            value={paymentTerms} onChange={(e) => setpaymentTerms(e.target.value)}
                            name="paymentTerms" id="paymentTerms"
                            className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA]'
                        >
                            {deliveryTimes.map((time)=>(
                                <option key={time} value={time}>
                                    Next {time} days
                                </option>
                            ))}
                        </select>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA] col-span-2'
                            type="text" placeholder='Description' />
                    </div>
                    {/* item list */}
                    {/* <div className='flex flex-col gap-5'>
                        <h1 className='text-2xl'>Item List</h1>
                        {item.map(({ id, name, quantity, price, total }) => (
                            <AddNewItem key={id} id={id} name={name} quantity={quantity} price={price} total={total} removeItem={removeItem} />
                        ))}
                        <button
                            type="button"
                            onClick={addItem}
                            className='dark:bg-[#1e2139] bg-[#373b53] py-3 rounded font-bold text-lg'
                        >
                            Add new Item
                        </button>
                    </div> */}
                </form>
                <div className='fixed bottom-10 flex gap-5'>
                    <motion.button
                        whileTap={{ scale: 1.1 }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}
                        className='bg-[#7C5DFA] text-white px-4 py-2 rounded-md cursor-pointer'
                    >
                        Save
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 1.1 }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}
                        className='bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-pointer'
                        onClick={() => setOpenCreateInvoice(false)}
                    >
                        Cancel
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}

export default CreateInvoice; 
