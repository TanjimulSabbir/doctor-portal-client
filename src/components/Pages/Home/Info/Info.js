import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../Assets/Icons/clock.svg'
import marker from '../../../Assets/Icons/marker.svg'
import phone from '../../../Assets/Icons/phone.svg'

const Info = () => {
    const style1 = 'linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)';
    const cardTitle = { a: "Opening Hours", b: "Visit our location", c: "Contact us now" }
    const cardInfo = { a: "Lorem Ipsum is simply dummy text of the pri", b: "Brooklyn, NY 10036, United States", c: "+000 123 456789" };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 sm:px-6 lg:py-0 sm:py-5 lg:mt-28 sm:mt-10' >
            <InfoCard img={clock} style1={style1} cardTitle={cardTitle.a} cardInfo={cardInfo.a}></InfoCard>
            <InfoCard img={marker} style1={"#3A4256"} cardTitle={cardTitle.b} cardInfo={cardInfo.b}></InfoCard>
            <InfoCard img={phone} style1={style1} cardTitle={cardTitle.b} cardInfo={cardInfo.b}></InfoCard>
        </div>
    );
};

export default Info;