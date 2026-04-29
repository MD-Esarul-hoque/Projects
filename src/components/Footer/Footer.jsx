import React from 'react'
import '../Footer/Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" srcset="" className='imgLogo' />
          <p>Food is any substance consumed to provide nutritional support, energy, and materials for growth and repair, consisting primarily of protein, carbohydrates, fat, and other essential nutrients</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Foods</h2>
          <ul>

            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>017800-78807</li>
            <li>food12@gmail.com</li>
          </ul>

        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copy Right 2026 &copy; All Right Reserved.  </p>
      
    </div>
  )
}

export default Footer
