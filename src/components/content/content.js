import React from 'react'
import style from "./content.module.css"
import data from "../data"
import {useState} from "react"
function Content(props) {
    const [display,setdisplay] = useState(false)
    const handleClick = () => {
        setDisplay(!display);
      };
    
    return (
        <>
          <div
            className={display ? 'display' : null}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverRes}
            onClick={handleClick}
          >
            {!display ? (
              <>
                <img className="logo" src={props.logo} alt="" />
                <div className="desc">{props.name}</div>
              </>
            ) : (
              <>
                <ul className="back">
                  <li>{props.options[0]}</li>
                  <li>{props.options[1]}</li>
                  <li>{props.options[2]}</li>
                </ul>
              </>
            )}
          </div>
        </>
      );
    }
    
   
} 
export default Content;
