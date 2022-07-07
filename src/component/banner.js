import React from 'react'
import { MdKeyboardArrowLeft ,MdKeyboardArrowRight} from 'react-icons/md'
const Banner = () => {
    return (
        <div className='f-banner'>
            <div className="f-banner--head ">
                <button className="btn btn-white">
                    <MdKeyboardArrowLeft />
                </button>
                <h2 className='text-white'>Silver Tier</h2>
                <p className='color-gray pb-40 mb-0'>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
            </div>
            <div className="f-banner--last">
                <div className="f-banner--card">
                    <h5 className='color-gray font-600 font-14'>Available Coin balance</h5>
                    <div className="font-48 color-dark">
                        340
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width : '65%'}}></div>
                    </div>

                    <p className='color-gray font-400 spacing-05'>You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</p>

                    <a href='/' className='f-link'>
                        View tier benefits
                        <MdKeyboardArrowRight/>
                    </a>
                    <button className="btn f-btn-dark">
                        My Coupons
                    </button>
                    <p className='color-gray font-400 text-center mb-0 spacing-05'>Updated : 02/11/2021</p>
                </div>
            </div>
        </div>
    )
}

export default Banner