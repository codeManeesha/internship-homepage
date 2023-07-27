import React from "react";
import style from "./Main.module.css"
function Main(){
    return(
        <div className={style.main}>
       <div className={style.left}>
        <h1>
        Ignite Your SMM Business with the Ultimate Solution!
        </h1>
       </div>
       <div className={style.right}>
        <h2>
        Unleash Your Entrepreneurial Spirit: Create Your Thriving Digital Empire with Global SMM Services!

Get Your $2 First Month

        </h2>
        <div className={style.btn}>
       <button id={style.button}>Get your $2 first month</button>
       <button id={style.button1}>See pricing</button>
       </div>
       <div className={style.star}>
       <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
       <span id={style.str}>Years of Exceptional 5-Star Service</span>


       </div>
       </div>
        </div>
    )
}
export default Main;