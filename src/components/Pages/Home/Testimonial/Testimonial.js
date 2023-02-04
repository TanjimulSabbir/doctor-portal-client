import React from 'react';
import SharedColor from '../../Shared/SharedColor/SharedColor';
import qoute from '../../../Assets/Icons/quote.svg'
import TestimonialCard from './TestiCards';
import TestiCards from './TestiCards';

const Testimonial = () => {
	const { colors } = SharedColor();
	const { green, secondary } = colors;


	return (
		<section className='ml-16 mr-13'>
			<div className='flex justify-center items-center'>
				<div className='flex-1 sm:text-center md:text-center'>
					<h1 className='text-xl font-bold' style={green}>Testimonial</h1>
					<h3 className='' style={secondary}>What Our Patients Says</h3>
				</div>
				<div className='flex-1 hidden lg:block'>
					<img className='float-right' style={{ width: "192px", height: "156px" }} src={qoute} alt="" srcset="" />
				</div>
			</div>
			<div>
				<TestiCards></TestiCards>
			</div>
		</section>
	);
};

export default Testimonial;