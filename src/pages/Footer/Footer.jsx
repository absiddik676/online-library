import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { TbSquareRotatedFilled } from "react-icons/tb";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut gravida, quam vitae est Sed non eros <br /> elementum nulla sodales ullamcorper.</p>
                    <div className='flex gap-7'>
                        <FaFacebook size={20} color="#3b5998" />
                        <FaTwitter size={20} color="#1DA1F2" />
                        <FaLinkedin size={20} color="#0077B5" />
                        <FaInstagram size={20} color="#C13584" />
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <TbSquareRotatedFilled size={24}/>
                        <TbSquareRotatedFilled size={24}/>
                        <TbSquareRotatedFilled size={24}/>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover flex gap-3"><MdLocationOn size={24} /><span>
                        3050 Universal Blvd #190 Fort Lauderdale, <br /> FL, 33331, Sydney New York City</span></a>
                    <a className="link link-hover flex gap-3"><FiMail size={24} /><span>susislibrary@domain.com</span></a>
                    <a className="link link-hover flex gap-3"><AiOutlinePhone size={24} /><span>+62 582 528 527 21</span></a>
                    <a className="link link-hover flex gap-3"><FaGlobe size={24} /><span>www.susislibrary.com
                    </span></a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;