import { motion } from 'framer-motion';
import React from 'react';
import { MdDelete } from "react-icons/md";

const AddNewItem = ({ id, name, quantity, price, total, removeItem, handleOnChange }) => {
    return (
        <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { type: 'spring', damping: 10, duration: 1 } }}
            exit={{ opacity: 0, transition: { type: 'spring', damping: 10, duration: 0.5 } }}
            className='flex justify-between gap-7 border-b-2 border-spacing-3 pb-5'>
            <div className='grid grid-cols-3 gap-4'>
                <input
                    name='name'
                    className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA] col-span-4'
                    type="text" placeholder='Item Name' value={name} onChange={(e) => handleOnChange(id, e)} />
                <input
                    name='quantity'
                    className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA]'
                    type="number" placeholder='Qty.' value={quantity} onChange={(e) => handleOnChange(id, e)} />
                <input
                    name='price'
                    className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA]'
                    type="number" placeholder='Price' value={price} onChange={(e) => handleOnChange(id, e)} />
                <input
                    name='total'
                    className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA]'
                    type="number" placeholder='Total' value={total} onChange={(e) => handleOnChange(id, e)} />
            </div>
            <button
                onClick={() => removeItem(id)}
                type='button' className='flex align-top'>
                <MdDelete className='text-2xl hover:text-red-600 dark:text-white' />
            </button>
        </motion.div>
    );
}

export default AddNewItem;
