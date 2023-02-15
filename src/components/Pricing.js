import React from 'react'
import './Pricing.css';
import { Link } from "react-router-dom"

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- BASIC -</h3>
                <span className='bar'>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quaters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </span>
            </div>
            <div className='card'>
                <h3>- SUITE -</h3>
                <span className='bar'>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quaters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </span>
            </div>
            <div className='card'>
                <h3>- EXECUTIVE -</h3>
                <span className='bar'>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quaters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </span>
            </div>
        </div>

    </div>
  )
}

export default Pricing