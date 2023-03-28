import React, {useEffect, useMemo, useState} from "react";

import ReactDOM from 'react-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Counter = ()=>{

    const [seconds, setSeconds] = useState(0);

    const timer= setTimeout(()=>{
        setSeconds((seconds)=>seconds+1);
    },1000);

    const counter = useMemo(()=>{
        const secondsString = String(seconds).padStart(6,"0");
        const secondsArray = Array.from(secondsString);
        return secondsArray;
    },[seconds]);

    //<i class="fa-regular fa-clock-nine fa-spin fa-spin-reverse"></i>
    //<FontAwesomeIcon icon="fa-regular fa-clock-nine" spin />
    //            <FontAwesomeIcon icon={faClockNine} />
    //<h1><i className="fa-regular fa-clock-nine fa-spin">|</i></h1>

    return (
        <div className="counter">
            
            {counter.map((element,index)=>{
                return (
                    <h1 className="card" key={index}>{element}</h1>
                )
            })}

        </div>

    )
}

export default Counter;