import React from 'react';
import "./Banner.css"
import chair from '../../Assets/Images/chair.png'
import SharedButton from '../Shared/SharedButton/SharedButton';

const Banner = () => {
    const btnBg = 'linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)'
    return (
        <div>
            <div className="hero min-h-screen banner" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl img" />
                    <div className='mr-5'>
                        <h1 className="text-5xl font-bold" style={{ color: "#3A4256" }}>Your New Smile Starts Here</h1>
                        <p className="py-6 font-normal" style={{ color: "#3A4256" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <SharedButton></SharedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;