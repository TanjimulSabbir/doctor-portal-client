import React from 'react';

import treatement from "../../../Assets/Images/treatment.png"
import SharedButton from '../../Shared/SharedButton/SharedButton';

const ServiceFooter = () => {
    const btnBg = 'linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)'
    return (
        <div className="shadow-xl bg-white lg:flex  rounded-lg lg:mb-44 lg:mt-36 sm:mb-20">
            <figure className='flex-1'> <img className='' src={treatement} alt="Album" /> </figure>
            <div className="card-body lg:pl-12 pr-30 desc flex-1">
                <h2 className="card-title text-5xl font-bold mb-10" style={{
                    color: 'rgba(58, 66, 86, 1)'
                }}>Exceptional Dental Care, on Your Terms</h2>
                <p className='text-base text-black font-normal'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                    <SharedButton></SharedButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceFooter;