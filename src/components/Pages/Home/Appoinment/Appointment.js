import React from 'react';
import './Appoinment.css'
import SharedColor from '../../Shared/SharedColor/SharedColor';
import appointment from '../../../Assets/Images/appointment.png'
import doctor from '../../../Assets/Images/doctor.png'
import SharedButton from '../../Shared/SharedButton/SharedButton';

const Appointment = () => {
    const { colors, background } = SharedColor();
    const { green } = colors;
    const { bg1 } = background;
    return (
        <section className='flex justify-center items-center mb-20 ' style={{ background: `url(${appointment})`, backgroundRepeat: "no-repeat" }}>
            <div className='img-container flex-1 hidden lg:block'> <img src={doctor} alt="" srcset="" /></div>
            <div className='appoint-info flex-1 sm:mb-14 sm:mt-14 sm:text-center'>
                <h3 className='text-xl font-bold' style={green}>Appoinment</h3>
                <h4 className='text-white text-4xl mt-5 font-semibold'>Make an appointment Today</h4>
                <p className='text-white text-lg mt-5 font-normal text-justify px-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <SharedButton></SharedButton>
            </div>
        </section>
    );
};

export default Appointment;