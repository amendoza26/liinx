import React, { useState } from 'react';

const Accordion = ({ title, children, index, activeIndex, setActiveIndex }) => {

  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (activeIndex === index) {
     return setActiveIndex("0");
    }
    setActiveIndex(index);
   };

  const handleSetIndex = (index) => {
    (activeIndex !== index) && setActiveIndex(index)
  }

  return (
    <>
        <div onClick={() => handleSetIndex(index)} className='flex w-full justify-between container mx-auto border-b border-gris-40'>
        {/* <div onToggle={() => handleToggle(index)} className='flex w-full justify-between rounded bg-verde-hover'> */}
            <div className='flex '>
                <div className='text-morado-primario text-2xl py-10'>{title}</div>
            </div>
            <div className="flex items-center justify-center">
              {
                (activeIndex === index)
                ? <div className='flex flex-row text-morado-primario'>Ver menos <img src='/remove.png' alt='remove' /> </div>
                : <div className='flex flex-row text-morado-primario'>Ver más <img src='/add.png' alt='add' /> </div>
              }
            </div>
                
        </div>

        {(activeIndex === index) && (
            <div className="bg-gris-10 text-xl pt-4 pb-6">
              <div className='container mx-auto'>
                {children}
              </div>
            </div>
        )}
    </>
  );
};

export default Accordion;
