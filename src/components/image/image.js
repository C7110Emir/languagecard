import React from 'react'
import Logo from "./react.svg"
import style from "./image.module.css"

function Image() {
    return (
        <div className={style.outerdiv}>
            <div className={style.imagediv}>
                <img src={Logo} alt="reactimg" className={style.image}></img>
               
            </div>
        </div>
    )
}
export default Image