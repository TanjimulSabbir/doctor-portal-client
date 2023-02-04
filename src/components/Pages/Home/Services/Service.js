import React from 'react';

const Service = (props) => {
    const { title, description, img } = props.service;
    console.log(title, title, img)
    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl text-white mx-7 sm:mt-8">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <p className='text-lg'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;