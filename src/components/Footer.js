import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>123 Acne St.</p>
                        <p>Karachi, Pk</p>
                    </div>
                </div>
                <div className='Phone'>
                    <h4> <FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />1-800-123-144</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>trips@galaxy.com</h4>
                </div>
            </div>

            <div className='right'>
                <h4>About the Company</h4>
                <p>"Lorem Ipsum" is the name of the company 
                    which wll be travelling to space and beyond
                    giving you the experience of a lifetime
                    So embrace in this journey with us
                </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>   

    </div>
  )
}

export default Footer