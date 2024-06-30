import React, { useState, useEffect } from 'react';

const ClientItems = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1); // default page
    const [currentItems, setCurrentItems] = useState([]);
    const [fade, setFade] = useState(false);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        setCurrentItems(items.slice(startIndex, startIndex + itemsPerPage));
    }, [currentPage, items]);

    const handlePrev = () => {
        if (currentPage > 1) {
            setFade(true);
            setTimeout(() => {
                setCurrentPage((currPage) => currPage - 1);
                setFade(false);
            }, 300);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setFade(true);
            setTimeout(() => {
                setCurrentPage((currPage) => currPage + 1);
                setFade(false);
            }, 300);
        }
    };

    return (
        <>
            <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'} overflow-hidden h-[280px] md:h-[180px]`} >
                <table className="min-w-full ">
                    <thead>
                        <tr className="w-full bg-gray-800 text-white">
                            <th className=" py-2 px-4">Item name</th>
                            <th className=" py-2 px-4 hidden md:inline-block">Qty</th>
                            <th className=" py-2 px-4 hidden md:inline-block">Item price</th>
                            <th className=" py-2 px-4">Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2 px-4">{item.name}</td>
                                <td className="py-2 px-4 hidden md:inline-block">{item.quantity}</td>
                                <td className="py-2 px-4 hidden md:inline-block">{typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : '-'}</td>
                                <td className="py-2 px-4">{typeof item.total === 'number' ? `$${item.total.toFixed(2)}` : '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-gray-800 text-white rounded hover:translate-y-2 transition-all duration-200 ease-in-out ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-gray-800 text-white rounded hover:translate-y-2 transition-all duration-200 ease-in-out ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default ClientItems;
