import React, {useMemo, useEffect} from "react";
import useAppContext from "../store/Context.jsx";

import Alert from "./Alert.jsx";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Counter = ()=>{

    const {store, actions} = useAppContext();
    const {seconds, counterValue, counterState, directionAscending, alarmState} = store; 
    const {setSeconds, setCounterValue, setCounterState, setAlarmState} = actions;

    useEffect(()=>{
        const timer= setTimeout(()=>{
            setSeconds((seconds)=>seconds+1);
            clearTimeout(timer);
        },1000);

    if (counterState && directionAscending) setCounterValue(prev=>prev+1);
    if (counterState && !directionAscending) setCounterValue(prev=>prev-1);

    if (!directionAscending && counterValue == 0) {
        //alert("Your time... is over.");
        setAlarmState(true);
        setCounterState(false);
        setCounterValue(0);
    }

    },[seconds]);  
    

    const counter = useMemo(()=>{
        const secondsString = String(counterValue).padStart(6,"0"); 
        const secondsArray = Array.from(secondsString);
        return secondsArray;
    },[counterValue]);

    //<i class="fa-regular fa-clock-nine fa-spin fa-spin-reverse"></i>
    //<FontAwesomeIcon icon="fa-regular fa-clock-nine" spin />
    //            <FontAwesomeIcon icon={faClockNine} />
    //<h1><i className="fa-regular fa-clock-nine fa-spin">|</i></h1>

    return (
        <>
            <div className="counter p-5">
            <h1><i className="far fa-clock fa-spin"></i></h1>
            {counter.map((element,index)=>{
                return (
                    <h1 className="card" key={index}>{element}</h1>
                )
            })}
            </div>
            {alarmState  && <Alert />}
        </>
    )
}

export default Counter;