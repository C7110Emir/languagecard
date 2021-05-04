import React from 'react'
import style from "./content.module.css"
import data from "../data"
import {useState} from "react"
function Content() {
    const [jsdisplay,setJsdisplay] = useState(false)
    const [cppdisplay,setCppdisplay] = useState(false)
    const [pydisplay,sePydisplay] = useState(false)
    const [phpdisplay,setPhpdisplay] = useState(false)
    const [javadisplay,setJavadisplay] = useState(false)
    const [htmldisplay,setHtmldisplay] = useState(false)
    const [godisplay,setGodisplay] = useState(false)
    const [cssdisplay,setCssdisplay] = useState(false)
    function handleClick(e) {
        console.log(e)
        if(e.target.id == "html"){
            setHtmldisplay = !htmldisplay
        }
        else if(e.target.id == "javascript"){
            setJsdisplay = !jsdisplay
        }
    }
    
    return (
        <div className={style.outerdiv}>
          
            <div className={style.innerdiv}>
                <div className={style.content}>
                    <h1>Languages</h1>
                    <div className={style.imgdiv} >
                    {data.map((element)=>{
                        return(
                        <div id={element.name} className={style.innermapdiv} onClick={handleClick}>
                            <img src={element.img} alt="sdgasdg" className={style.imagee} /> 
                            <div id={element.name} className={style.factlistdefault} >
                                <ul>
                                    <li>{element.options[0]}</li>
                                    <li>{element.options[1]}</li>
                                    <li>{element.options[2]}</li>
                                </ul>
                                
                                
                            </div>                    
                        </div>
                        )
                     } )
                    }
                    </div>
                </div>
                <div className={style.clip}>
                
                </div>   
            </div>  
        </div>
    )
} 
export default Content;
