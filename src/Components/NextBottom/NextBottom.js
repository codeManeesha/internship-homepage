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
            <div className={style.right}></div>
        </div>
        <div className={style.content}></div>
        <div className={style.about}></div>
        </>
    )
}
export default NextBottom;