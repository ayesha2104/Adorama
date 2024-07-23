import React from 'react'
import './AboveFooter.css'
import CallMe from './CallMe.png';
import Message from './Message.png';
import services from './services.png';
import Location from './Location.png';


const AboveFooter = () => {
  return (
    <div className='abovefooter'>
        <div className='Call'>
        <img src={CallMe} id='img1'/>
        <h1 id='call'>Give Us A Call</h1>
        <p>Questions? We’re happy to help!<br/> Call us at <a href='#'>800-223-2500</a></p>
        </div>
        <div className="message">
        <img src={Message} id='img2'/>
        <h1 id='chat'>Chat Now</h1>
        <p>Need help or have product<br/> questions?<a href='#'>Chat with an expert.</a> </p>
        </div>
        <div className="service">
        <img src={services} id='img3'/>
        <h1 id='service'>Help Center</h1>
        <p>For info on shipping, returns, orders<br/> and more, <a href='#'>find answers here.</a></p>
        </div>
        <div className="location">
        <img src={Location} id='img4'/>
        <h1 id='location'>Visit Our Stores</h1>
        <p>Visit our <a href='#'>NYC store</a> for shopping,<br/>
        services, repairs, and more.</p>
        </div>
      
    </div>
  )
}

export default AboveFooter
