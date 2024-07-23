import React from 'react';
import './Footer.css'; // Adjust the path as needed
import AboveFooter from './AboveFooter/AboveFooter';


const Footer = () => {
  return (
    <>
    <AboveFooter/>
    <div className="footer-main">
      <div id="footer-help" className="footer-links">
        <h3 className="footer-header">How Can We Help?</h3>
        <ul>
          <li><a className="track-event" href="/help">Customer Service</a></li>
          <li><a className="track-event show-logged-out" href="/help/trackOrder">Track Your Order</a></li>
          <li><a className="track-event show-logged-in" href="/Als.Mvc/nspc/MyAccount#dashboard">Track Your Order</a></li>
          <li><a className="track-event" href="/help/shippingAndDelivery">Shipping & Delivery</a></li>
          <li><a className="track-event" href="/help/storePickup">In-Store Pickup</a></li>
          <li><a className="track-event" href="/help/InternationalOrders">International Orders</a></li>
          <li><a className="track-event" href="/help/returnPolicy">Return Policy</a></li>
          <li><a className="track-event" href="/help/contactus">Contact Us</a></li>
          <li><a className="track-event" href="/help/warranties">Warranties</a></li>
          <li><a className="track-event" href="/help/accessibilityPolicy">Accessibility Policy</a></li>
        </ul>
      </div>
      <div id="footer-services" className="footer-links">
        <h3 className="footer-header">Services & Programs</h3>
        <ul>
          <li>
            <a href="/industry/commercial/?utm_source=adorama.com&amp;utm_medium=website&amp;utm_campaign=abs_adoramawebsite_globalfooter">Adorama Business</a>, 
            <a className="track-event" href="/industry/higher-ed/?utm_source=adorama.com&amp;utm_medium=website&amp;utm_campaign=abs_adoramawebsite_globalfooter">Education</a>, &amp; 
            <a className="track-event" href="/industry/federal-government/?utm_source=adorama.com&amp;utm_medium=website&amp;utm_campaign=abs_adoramawebsite_globalfooter">Government</a>
          </li>
          <li><a className="track-event" href="/g/adorama-credit">Adorama Edge Credit Card</a></li>
          <li><a className="track-event" href="/g/rewards-dashboard">VIP Rewards</a></li>
          <li><a className="track-event" href="/edu">EDU Program</a></li>
          <li><a className="track-event" href="/g/adorama-protect">Adorama Protect</a></li>
          <li><a className="track-event" href="https://www.printique.com/?utm_source=adorama&amp;utm_medium=referral&amp;utm_campaign=footer-link">Photo Printing</a></li>
          <li><a className="track-event" href="https://www.adoramarentals.com/">Camera Rentals</a></li>
          <li><a className="track-event" href="/g/used-quote">Sell Used Equipment</a></li>
          <li><a className="track-event" href="/lists/pt/index">Product Collections</a></li>
        </ul>
      </div>
      <div id="footer-company" className="footer-links">
        <h3 className="footer-header">Who We Are</h3>
        <ul>
          <li><a className="track-event" href="/g/about-adorama">About Adorama</a></li>
          <li><a className="track-event" href="/g/history">Our History</a></li>
          <li><a className="track-event" href="/creators">Creator Highlights</a></li>
          <li><a className="track-event" href="/g/reviews">Adorama Reviews</a></li>
          <li><a className="track-event" href="/help/mapAndDirections">Map & Directions</a></li>
          <li><a className="track-event" href="/g/events/">Events</a></li>
          <li><a className="track-event" href="/alc/">Learning Center</a></li>
          <li><a className="track-event" href="/brands">Brands</a></li>
          <li><a className="track-event" href="/g/adorama-affiliate-program">Affiliate Program</a></li>
          <li><a className="track-event" href="/g/careers" target="_blank">Careers</a></li>
        </ul>
      </div>
      <div id="footer-contact" className="footer-links footer-form">
        <h3 className="footer-header">Unlock Free Shipping</h3>
        <p>Sign up for texts and get special offers, product news, exclusive deals, and more. Plus, Adorama Rewards members earn <b>25 points.</b></p>
        <p>
          By submitting this form, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Adorama at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg and data rates may apply. View <a href="/help/termsAndConditions">Terms</a> &amp; <a href="/help/privacy">Privacy</a>.
          *Valid only on Standard Shipping with a maximum discount $50 within 48 Contiguous States. Excludes PO Boxes, Alaska, FPO/APO, Hawaii, Puerto Rico, and Guam.
        </p>
        <div className="footer-form">
          <form name="main">
            <input name="op" type="hidden" value="process" />
            <input name="func" type="hidden" value="EmailOptin" />
            <input name="name" type="hidden" value="" />
            <input name="email" type="email" placeholder="Enter your email" required />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>

    </div>
    </>
  );

};

export default Footer;
