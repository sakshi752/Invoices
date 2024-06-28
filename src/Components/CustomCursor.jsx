import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="absolute bg-[#7C5DFA] rounded-full w-[20px] h-[20px] transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default CustomCursor;
