import React from 'react'
import '../CEOteam/CEOteam.css'
import {assets} from '../../assets/assets'


const CEOteam = () => {
  return (
    <div className='CEOteam'>
        <h3>Meet the team</h3>
        <p>Contrary to popular belief, is not simply random text. It has roots in a piece of classical <br />Latin literature from 45 BC, making it over 2000 years old.</p>
        <div className='CEO-containers'>
            <div>
                <img className='imgSize' src={assets.liton_islam} alt="" srcset="" />
                <h4 className='NameTitle'>Liton Islam</h4>
                <p className='ParaGraphTitle'>CEO of E.AN Foods</p>
                <div >
                    <img className="iconStyle" src={assets.facebook_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.linkedin_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.twitter_icon} alt="" srcset="" />
                </div>

            </div>
            <div>
                <img className='imgSize' src={assets.naser} alt="" srcset="" />
                <h4 className='NameTitle'>Mohammad Abu Naser</h4>
                <p className='ParaGraphTitle'>Secretary of E.AN Foods</p>
                <div >
                    <img className="iconStyle" src={assets.facebook_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.linkedin_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.twitter_icon} alt="" srcset="" />
                </div>

            </div>
            <div>
                <img className='imgSize' src={assets.esarul} alt="" srcset="" />
                <h4 className='NameTitle'>Md. Esarul Hoque</h4>
                <p className='ParaGraphTitle'>Manager of E.AN Foods</p>
                <div >
                    <img className="iconStyle" src={assets.facebook_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.linkedin_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.twitter_icon} alt="" srcset="" />
                </div>

            </div>
           
        </div>
        
      
    </div>
  )
}

export default CEOteam
