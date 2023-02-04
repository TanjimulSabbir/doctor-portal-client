import React from 'react';
import fluoride from '../../../Assets/Images/fluoride.png'
import cavity from '../../../Assets/Images/cavity.png'
import whitening from '../../../Assets/Images/whitening.png'
import Service from './Service';
import ServiceFooter from './ServiceFooter';
import SharedColor from '../../Shared/SharedColor/SharedColor';

const Services = (props) => {
    const color1 = "rgba(25, 211, 174, 1)"
    const color2 = "rgba(58, 66, 86, 1)"
    const serviceData = [
        { _id: 1, title: "Fluoride Treatment", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: fluoride },
        { _id: 2, title: "Cavity Filling", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: cavity },
        { _id: 3, title: "Teeth Whitening", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: whitening },
    ];
    const { colors, background } = SharedColor();
    const { red, yellow, cyan, green } = colors;

    return (
        <div className='sm:mt-20'>
            <div className='text-center lg:mt-32 mb-20'>
                <h3 className='uppercase text-xl font-bold' style={{ color: color1 }}>Our Services</h3>
                <h2 className='uppercase text-4xl font-normal mt-2' style={{ color: color2 }} >Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-12 sm:mb-10'>
                {serviceData.map(service => {
                    return <Service key={service._id} service={service}></Service>
                })}
            </div>
            <div className='lg:pl-56 lg:pr-40 pt-40 pb-40 sm:p-10'>
                <ServiceFooter></ServiceFooter>
            </div>
            {/* <button className='btn btn-primary uppercase text-white font-bold mt-7' style={{ ...bg2, ...cyan }}>This is shared color</button> */}
        </div >
    );
};

export default Services;