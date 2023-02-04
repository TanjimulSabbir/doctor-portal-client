import React from 'react';
import SharedButton from '../../Shared/SharedButton/SharedButton';

const ContactForm = () => {
    return (
        <div className='mt-10'>
            <div className='flex flex-col justify-center items-center gap-y-5'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-bordered" rows="2" cols="42" placeholder="Bio"></textarea>
            </div>
            <div className='mt-4'>
                <SharedButton></SharedButton>
            </div>
        </div>
    );
};

export default ContactForm;