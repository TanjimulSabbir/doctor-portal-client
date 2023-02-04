import React, { useState } from 'react';

const B2Card = ({ service, setTreatment }) => {
    const { treatmentName, slots, price } = service;

    return (
        <div className="card shadow-xl text-center space-y-5 border border-gray-300">
            <div className="card-body">
                <h2 className="text-2xl text-color1">{treatmentName}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p className='text-lg mt-3'>{slots.length > 1 ? `${slots.length} Spaces Available` : `${slots.length} Space Available`}</p>
                <small>Price: {price}</small>
                <div className={`justify-center mt-8`}>
                    <label className={`btn text-white w-full border-none ${slots.length === 0 ? "btn-disabled bg-gray-600" : "bg-gradient-to-r from-emerald-400 to-cyan-500 "}`} htmlFor="treatment-modal" onClick={() => setTreatment(service)}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default B2Card;

