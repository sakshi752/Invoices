import React from 'react';

const StatusBtn = ({ status }) => {
  return (
    <button className={` 
      ${status === 'paid' && 'bg-[#33d69f0f] text-[#33d69f]'} 
      ${status === 'pending' && 'bg-[#ff8f000f] text-[#ff8f00]'}
      ${status === 'draft' && 'bg-[#dfe3fa0f] text-[#dfe3fa]'}
      p-2 rounded ml-6 flex items-center gap-3
    `}>
          <div className={` h-3 w-3 rounded-full
          ${status === 'paid' && 'bg-[#33d69f] '} 
          ${status === 'pending' && 'bg-[#ff8f00]'}
          ${status === 'draft' && 'bg-[#dfe3fa]'}
        `}/>

      {status}
    </button>
  );
}

export default StatusBtn;
