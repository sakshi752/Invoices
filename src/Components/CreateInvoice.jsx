import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const CreateInvoice = ({ openCreateInvoice, setOpenCreateInvoice }) => {
    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenCreateInvoice(false);
            }
        };

        document.addEventListener('mousedown', handler);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [setOpenCreateInvoice]);

    return (
        <motion.div className='fixed top-0 bottom-0 left-0 right-0 bg-[#000005be]'>
            <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 40, duration: 0.4 } }}
                exit={{ x: -700, transition: { duration: 0.2 } }}
                className='scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white md:pl-[150px] py-16 px-6 h-screen md:w-[768px] md:rounded-r-3xl'
                ref={menuRef}
            >
                <button onClick={() => setOpenCreateInvoice(false)}>
                    cancel
                </button>
            </motion.div>
        </motion.div>
    );
}

export default CreateInvoice;
