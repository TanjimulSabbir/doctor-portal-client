import React from 'react';
import ApointmentBanner from './ApointmentBanner';
import Banner2 from './Banner2/Banner2';

const Appointment = () => {
    const [selected, setSelected] = React.useState(new Date());
    return (
        <div>
            <ApointmentBanner setSelected={setSelected} selected={selected}></ApointmentBanner>
            <Banner2 selected={selected}></Banner2>
        </div>
    );
};

export default Appointment;