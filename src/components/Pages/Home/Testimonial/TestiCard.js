import React from 'react';

const TestiCard = ({ info }) => {
    const { cardTitle, userName, place, img } = info;
    return (
        <div className="card lg:w-96 shadow-xl ml-0 mr-16 bg-slate-50 sm:mt-14">
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <div className="flex card-actions justify-start items-center mt-9">
                    <img className='border border-green-600 rounded-full w-16' src={img} alt="" srcset="" />
                    <div className='ml-3'>  <h4>{userName}</h4>
                        <p>{place}</p>
                    </div></div>
            </div>
        </div>
    );
};

export default TestiCard;