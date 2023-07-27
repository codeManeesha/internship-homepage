import React from "react";
import style from './Middle.module.css'
import{TbChartInfographic} from 'react-icons/tb'
function Middle(){
    return(
        <>
        <div className={style.middle}>
            <h1>Efficiency & Cost Savings &nbsp;&nbsp;&nbsp; with Our SMM Panels</h1>
            <p>Discover the Exquisite Simplicity: Unveiling Our Intuitive &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dashboard and Empowering System Tools!</p>
        </div>
        <div className={style.box}>
            <div className={style.one}>
               <div className={style.graph}><TbChartInfographic size={300}/></div>
               <div className={style.detail}>
               <p> In Progress : 185</p>
               <p>Pending : 24</p>
               <p>Processing : 492</p>
               <p>Completed : 5,389</p>
               
               </div>
               {/* <div >
               
               </div> */}
               <div className={style.about}>
               <h2>Powerful User Panel For Customers</h2>
               <p>Upgrade customer satisfaction and supercharge your sales by embracing an intuitive website that effortlessly handles the massive influx of customer orders.</p>
               </div>
            </div>
            <div className={style.two}>
          
                <div className={style.sale}>
                    <h2>Comprehensive Admin Dashboard</h2>
                    <p>Unleash Your Potential in the SMM Panel Business with an Empowering Admin Dashboard, Empowering You with Absolute Control, Flexibility, and an Array of Cutting-Edge Features to Supercharge Your Workflow.</p>
                </div>
                <div className={style.center}>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>

                </div>

            </div>
            <div className={style.three}>
                <div className={style.pieChart}>
                    <div className={style.pie}></div>
                   
                </div>
                
                <div className={style.ChartAbout}>
                <p>
                    Service Name<br></br>
1,000 Instagram Real Followers
                    </p>
                    <p>
                    Provider Rate<br></br>
$0.49
                    </p>
                    <p>
                    Selling Rate<br></br>
+ $0.98
                    </p>
                    <p>
                    Profit: 100% = $0.49
                    </p>
                </div>
                <div className={style.chart}>
                        <h2>Automated Order Processing System</h2>
                        <p>Streamline Your Panel’s Operations with Seamless Order Processing using Multiple API Integrations from Limitless v2 SMM Providers</p>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Middle;