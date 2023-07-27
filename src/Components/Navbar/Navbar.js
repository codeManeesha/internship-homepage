import React from "react";
import style from './Navbar.module.css'
function Navbar(){
    return(
        <>
        <div className={style.Nav}>
            <div><h3>FlashyPanels</h3></div>
            <div className={style.demo}>
                <div>Features</div>
                <div>Pricing</div>
                <div>Demo</div>
            </div>
            <div><button>Sign Up</button></div>
        </div>
        </>
    )
}
export default Navbar;