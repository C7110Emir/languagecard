import React from 'react'
import style from "./content.module.css"
import data from "../data"

function Content() {
    return (
        <div className={style.outerdiv}>
          
            <div className={style.innerdiv}>
                <div className={style.content}>
                    <h1>Languages</h1>
                    {data.map((element)=>{
                        {console.log(element.img)}
                        <img data-src={element.img} alt="sfasa"/>
                     } )
                    }
                </div>
                <div className={style.clip}>
                
                </div>   
            </div>  
        </div>
    )
} 
export default Content;
