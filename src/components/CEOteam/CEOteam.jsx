import React from 'react'
import '../CEOteam/CEOteam.css'
import {assets} from '../../assets/assets'


const CEOteam = () => {
  return (
    <div className='CEOteam'>
        <h3>Meet the team</h3>
        <p className='para'>Contrary to popular belief, is not simply random text. It has roots in a piece of classical <br />Latin literature from 45 BC, making it over 2000 years old.</p>
        <div className='CEO-containers'>
            <div >
                <div className='CEO_person_container'>
                    <img className='imgSize' src={assets.liton_islam} alt="" srcset="" />
                    <img className='rating_imag' src={assets.rating_starts} alt="" srcset="" />
                </div>
                <h4 className='NameTitle'>Mr. Liton Islam</h4>
                <p className='ParaGraphTitle'>CEO of E.AN Foods</p>
                <div >
                    <img className="iconStyle" src={assets.facebook_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.linkedin_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.twitter_icon} alt="" srcset="" />
                </div>

            </div>
            <div>
                <div className='CEO_person_container'>
                    <img className='imgSize' src={assets.Abu_bakkar_siddique} alt="" srcset="" />
                    <img className='rating_imag' src={assets.rating_starts} alt="" srcset="" />
                </div>
                <h4 className='NameTitle'>Abu Bakkar Siddique</h4>
                <p className='ParaGraphTitle'>CEO of E.AN Foods</p>
                <div >
                    <img className="iconStyle" src={assets.facebook_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.linkedin_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.twitter_icon} alt="" srcset="" />
                </div>

            </div>
            <div>
                <div className='CEO_person_container'>
                    <img className='imgSize' src={assets.naser} alt="" srcset="" />
                    <img className='rating_imag' src={assets.rating_starts} alt="" srcset="" />
                </div>
                <h4 className='NameTitle'>Mohammad Abu Naser</h4>
                <p className='ParaGraphTitle'>Secretary of E.AN Foods</p>
                <div >
                    <img className="iconStyle" src={assets.facebook_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.linkedin_icon} alt="" srcset="" />
                    <img className="iconStyle" src={assets.twitter_icon} alt="" srcset="" />
                </div>

            </div>
            <div>
                <div className='CEO_person_container'>
                    <img className='imgSize' src={assets.esarul} alt="" srcset="" />
                    <img className='rating_imag' src={assets.rating_starts} alt="" srcset="" />
                </div>
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
