import { format } from 'date-fns';
import React, { useState } from 'react';
import B2Cards from './B2Cards';

const Banner2 = ({ selected }) => {

    return (
        <div className='mt-10 mb-36 px-10'>
            <div className='pt-14 text-center '>
                <h2 className='text-4xl text-color1'>Available Services on {selected && format(selected, 'PP')}</h2>
            </div>
            <div className='pt-20'>
                <B2Cards selected={selected}></B2Cards>
            </div>
        </div>
    );
};

export default Banner2;