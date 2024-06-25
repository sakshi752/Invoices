import React, { useEffect, useRef } from 'react';

const DeleteModal = ({deleteModalHandler}) => {
    const deleteRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if (!deleteRef.current.contains(e.target)) {
               deleteModalHandler()
            }
            // alert("inside")
        };

        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []); 
    return (
        <div className='fixed inset-0 z-50 bg-[#000005be] flex items-center justify-center'>

            <div
                ref={deleteRef}
                className='bg-white dark:bg-[#1e2139] rounded-lg shadow-lg p-6 z-10 max-w-lg w-full '>
                <h2 className='text-lg font-semibold mb-4 dark:text-white'>Confirm Deletion</h2>
                <p className='text-gray-600 dark:text-gray-300 mb-6'>Are you sure you want to delete this invoice? This action cannot be undone.</p>
                <div className='flex justify-end space-x-4'>
                    <button
                    onClick={deleteModalHandler}
                        className='bg-gray-300 text-gray-700 dark:bg-[#252945] dark:text-gray-300 py-2 px-4 rounded hover:bg-gray-400 dark:hover:bg-[#2d2f48]'>
                        Cancel
                    </button>
                    <button
                    
                        className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
