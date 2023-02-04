import React from 'react';

const InfoCard = ({ img, bg, style1, cardTitle, cardInfo }) => {

    return (
        <div className={`card lg:card-side lg:w-96 ${bg} shadow-xl text-white`} style={{ background: style1 }}>
            <figure className='p-5'><img src={img} alt="Album" /></figure>
            <div className="card-body lg:items-start sm:items-center">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardInfo}</p>
            </div>
        </div>
    );
};

export default InfoCard;