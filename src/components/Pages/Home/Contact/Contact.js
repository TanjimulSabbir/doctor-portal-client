import React from 'react';
import ContactForm from './ContactForm';
import SharedColor from '../../Shared/SharedColor/SharedColor';
import appointment from '../../../Assets/Images/appointment.png'

const Contact = () => {
    const { colors } = SharedColor();
    const { green } = colors;
    return (
        <section className='mt-36 pb-16 text-center' style={{ background: `url(${appointment})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className='pt-16'>
                <div>
                    <h5 className='text-xl font-bold' style={green}>Contact Us</h5>
                    <h2 className='text-4xl font-normal text-white'>Stay connected with us</h2>
                </div>
                <ContactForm></ContactForm>
            </div>
        </section>
    );
};

export default Contact;