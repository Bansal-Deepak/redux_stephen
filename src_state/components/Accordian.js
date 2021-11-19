import React,{useState} from 'react';

import 'css/Accordian.css';
const Accordian=({items})=>{

const [activeindex,setActiveindex] =useState(-1);
    return(<div>{items.map((item,index)=>{
        let active=index!==activeindex ? "active":"";
        return(<div key={item.title}>
            <h1 onClick={()=>{setActiveindex(index)}}>{item.title}</h1>
            

            <h1 className={`${active}`}>{item.content}</h1>
        </div>)
    })
    }</div>)
}

export default Accordian;