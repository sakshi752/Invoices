import React from 'react';
import { MdDelete } from "react-icons/md";

const AddNewItem = ({ id, name, quantity, price, total,removeItem }) => {
    return (
        <div className='flex justify-between gap-7 border-b-2 border-spacing-3 pb-5'>
            <div className='grid grid-cols-3 gap-4'>
                <input
                    className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA] col-span-4'
                    type="text" placeholder='Item Name' value={name} />
                <input
                    className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA]'
                    type="number" placeholder='Qty.' value={quantity} />
                <input
                    className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA]'
                    type="number" placeholder='Price' value={price} />
                <input
                    className='border-2 py-2 px-4 rounded-md text-black focus:outline-none focus:border-[#7C5DFA]'
                    type="number" placeholder='Total' value={total} />
            </div>
            <button
            onClick={()=>removeItem(id)}
            type='button' className='flex align-top'>
                <MdDelete className='text-2xl hover:text-red-600' />
            </button>
        </div>
    )
}

export default AddNewItem
