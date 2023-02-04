import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../Assets/Images/chair.png'

const ApointmentBanner = ({ setSelected, selected }) => {

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p className='rounded text-white bg-secondary flex justify-center'>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <section>
            <div className="flex flex-col-reverse py-20 md:flex-row md:py-44 md:justify-between bg-appointment-bg bg-contain">
                <div className='flex-1'>
                    <div className='text-black flex justify-center items-center shadow-sm rounded pt-14 md:pt-0'><DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer} />
                    </div>
                </div>
                <div className='flex-1 px-7 lg:px-16 md:py-0 justify-center items-center'>
                    <img src={chair} className="h-full" alt='Dentist Chair' />
                </div>
            </div>
        </section>
    );
};

export default ApointmentBanner;