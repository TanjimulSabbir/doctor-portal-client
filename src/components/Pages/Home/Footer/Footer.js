import React from 'react';
import footer from '../../../Assets/Images/footer.png'

const Footer = () => {
    return (
        <div className='pb-11 bg-transparent' style={{ background: `url(${footer})`, backgroundSize: "cover" }}>
            <footer className="footer p-10 flex justify-between items-center px-24">
                <div>
                    <span className="footer-title uppercase">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title uppercase">Oral Health</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title uppercase">Our Address</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='flex justify-center items-center'>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;