import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
<div className="cssBG mx-auto text-center h-64 bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
  <div className='relative top-16 pt-5'>
    {/* Links */}
    <div className="flex justify-center space-x-6 mb-4 text-white">
      <a href="#" className="hover:text-gray-300 transition duration-200">About</a>
      <a href="#" className="hover:text-gray-300 transition duration-200">Blog</a>
      <a href="#" className="hover:text-gray-300 transition duration-200">Jobs</a>
      <a href="#" className="hover:text-gray-300 transition duration-200">Press</a>
      <a href="#" className="hover:text-gray-300 transition duration-200">Accessibility</a>
      <a href="#" className="hover:text-gray-300 transition duration-200">Partners</a>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center space-x-6 mb-4 text-white">
      <a href="#" className="hover:text-gray-300 transition duration-200"><FaFacebook /></a>
      <a href="#" className="hover:text-gray-300 transition duration-200"><FaInstagram /></a>
      <a href="#" className="hover:text-gray-300 transition duration-200"><AiOutlineTwitter /></a>
      <a href="#" className="hover:text-gray-300 transition duration-200"><FaGithub /></a>
      <a href="#" className="hover:text-gray-300 transition duration-200"><FaYoutube /></a>
    </div>

    {/* Copyright */}
    <p className="text-gray-200 text-sm">&copy; 2024 Your Company, Inc. All rights reserved.</p>
  </div>
</div>
    </>
  )
}

export default Footer