import React from 'react'
import eton from './eton.webp'
import asus from './asus.webp'
import './BelowFlamingo.css'

const BelowFlamingo = () => {
  return (
    <div className='belowFlamingo'>
        <div className="eton">
        <img src={eton}/>
        <h2 className="image-text">
        All-band Emergency Hand Crank Radio</h2>
        <p className='para'>Essential tool for every emergency kit at home, at work, or in the great outdoors. A multifunction alert radio that is rugged, rechargeable, and reliable! Not to mention solar-powered, splashproof, smart phone & tablet charging with Bluetooth streaming.</p>
        </div>
        <div className="asus">
            <img src={asus}/>
            <h2 className="image-text">Summer Cyber Savings</h2>
            <p className='para'>Great deals on powerful computers and stunning monitors. Offer ends 7/30/24 at 11:59pm ET.</p>
        </div>
    </div>
  )
}

export default BelowFlamingo
