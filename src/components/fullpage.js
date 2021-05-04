import React from 'react'
import Image from "./image/image"
import "./fullpage.css"
import data from "../data"
function Fullpage() {
    const arr = lang_data.map((item) => (
    <Langs name={item.name} logo={item.img} options={item.options} />
            ));
    return (
        
    )


export default Fullpage;