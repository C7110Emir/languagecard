import React from 'react'
import Image from "./image/image"
import "./fullpage.css"
import data from "./data"
import Content from './content/content';
export default function Fullpage(props) {
    const arr = data.map((item) => (
    <Content name={item.name} logo={item.img} options={item.options} />
            ));
    return (
        <div className="main">
        <div className="header">
          <Image className="top_img"/>
        </div>
        <div className="card">
          <div className="ribbon"></div>
          <div className="box">
            <h1 className="title">Languages</h1>
            {arr}
          </div>
        </div>
      </div>
    )
}