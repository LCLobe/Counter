import React, {useMemo} from "react";
import useAppContext from "../store/Context.jsx";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Counter = ()=>{

    const {store, actions} = useAppContext();
    const {seconds, directionAscending} = store; 
    const {setSeconds} = actions;

    if (directionAscending) {
        const timer= setTimeout(()=>{
            setSeconds((seconds)=>seconds+1);
            clearTimeout(timer);
        },1000);    
    } else {
        const timer= setTimeout(()=>{
            setSeconds((seconds)=>seconds-1);
            clearTimeout(timer);
        },1000);    
    }

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
        <div className="counter p-5">
            
            {counter.map((element,index)=>{
                return (
                    <h1 className="card" key={index}>{element}</h1>
                )
            })}

        </div>

    )
}

export default Counter;