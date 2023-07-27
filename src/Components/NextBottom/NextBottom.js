import React from "react";
import style from './NextBottom.module.css'
import img from '../Image/img1.jpg'
import{VscGraph} from 'react-icons/vsc'

function NextBottom(){
    return(
        <>
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.boost}>
                    <div className={style.vsc}><VscGraph size={40}/></div>
                    
                    <h5>Boost sales</h5>
                   
                 
                   
                </div>
                <div><img src={img} height={300}></img></div>
                <div className={style.use}>
                    <div className={style.vsc}><VscGraph size={40}/></div>
                    
                    <h5>Easy to use</h5>
                   
                 
                   
                </div>
                <div>

                </div>
            </div>
            <div className={style.right}>
                <p>Why Choose FlashyPanels?</p>
                <h1>Access Advanced Social Media Marketing Tools</h1>
                <p>Advanced AI-powered algorithms that help you optimize your marketing campaigns and drive revenue growth</p>
              <ul>
                <li>Affordable & Flexible</li>
                <li>Seamless integration</li>
                <li>Customer Support</li>
                <li>Team Collaboration</li>
                <li>Advanced Analytics</li>
                <li>Advanced Reporting</li>
              </ul>


            </div>
        </div>
        <div className={style.content}>
            <div className={style.para}>
            <h1>Learn more about the<br></br> benefits of utilizing our <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;platform</h1>
            </div>
            <div className={style.number}><p>Our platform offers a wide range of convenient methods and tools that can be customized for your panel</p></div>
            <div className={style.num}>
                <div><h1>50+ <span id={style.method}>Payment methods</span></h1></div>
                <div><h1>20+<span id={style.method}>Integrations</span></h1></div>
                <div><h1>200+<span id ={style.method}>Currencies</span></h1></div>
            </div>
            
        </div>
        <div className={style.about}>
            <div className={style.panel}>
            <h1>Establish a strong online presence and launch your success. <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ready to launch your?</h1>
            <p>Starting your SMM panel is effortless with our powerful tools and comprehensive support from FlashyPanels ⚡️ . Start today! Save time and increase productivity with an efficient workflow, automating panel tasks and enabling you to focus on expanding your business.</p>
            </div>
            <div className={style.btn}>
                <div><button>sign up</button></div>
                <div><button> pricing</button></div>
            </div>
        </div>
        </>
    )
}
export default NextBottom;