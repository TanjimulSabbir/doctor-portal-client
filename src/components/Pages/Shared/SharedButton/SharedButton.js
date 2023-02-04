import React from 'react';

const SharedButton = () => {
    const btnBg = 'linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)'
    return (
        <div>
            <button className='btn btn-primary uppercase text-white font-bold mt-7' style={{ background: btnBg }}>Get Started</button>
        </div>
    );
};

export default SharedButton;