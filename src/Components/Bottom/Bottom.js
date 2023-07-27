import React from "react";
import style from './Bottom.module.css'
import{VscGraph} from 'react-icons/vsc'
import {BsFillBoxFill} from 'react-icons/bs'
import {PiCameraRotateBold} from 'react-icons/pi'
function Bottom(){
    return(
        <div className={style.container}>
            <div className={style.left}>
                <p>How we help you get the best solution?</p>
                <h3>Gain knowledge about panel growth security</h3>
                <p>Our platform offers you expert-level designed and streamlined social media tactics. You have our word for it!</p>
                <ul>
                    <li>Daily Backups</li>
<li>Your Own Domain</li>
<li>DDoS Attacks Protection</li>
<li>FREE SSL Certificate</li>
<li>Elevate CDN</li>
<li>Unlimited Traffic</li>
                </ul>
            </div>
            <div className={style.right}>
                <div className={style.one}>
                    <div className={style.vsc}><VscGraph size={50}/></div>
                    <div>
                        <h4>Trusted by partners and providers</h4>
                        <p>Leading panels and providers trust us to safeguard their data.</p>
                    </div>
                </div>
                <div className={style.two}>
                    <div className={style.bsf}><BsFillBoxFill size={50}/></div>
                    <div>
                    <h4>No programming skills needed</h4>
                        <p>You can easily start and operate your panel without any programming skills.</p>
                    </div>
                </div>
                <div className={style.three}>
                   <div className={style.pic}><PiCameraRotateBold size={50}/></div> 
                   <div>
                   <h4>Reasonable & Affordable Pricing</h4>
                        <p>We offer competitively priced panel maintenance plans tailored to me at your needs.</p>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Bottom;