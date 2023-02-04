import React from 'react';
import TestiCard from './TestiCard';
import people1 from '../../../Assets/Images/people1.png'
import people2 from '../../../Assets/Images/people2.png'
import people3 from '../../../Assets/Images/people3.png'

const TestiCards = () => {
    const cardInfo = [
        { _id: 1, cardTitle: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", userName: "Winson Herry", img: people1, place: "California" },
        { _id: 2, cardTitle: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", userName: "Winson Herry", img: people2, place: "California" },
        { _id: 3, cardTitle: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", userName: "Winson Herry", img: people3, place: "California" },
    ]

    return (
        <div className='lg:flex mt-24 mb-30 '>
            {
                cardInfo.map(info => {
                    return <TestiCard key={info._id} info={info}></TestiCard>
                })
            }
        </div>
    );
};

export default TestiCards;