import React, {useMemo, useEffect} from "react";
import useAppContext from "../store/Context.jsx";

import Alert from "./Alert.jsx";

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

    const classForClock = counterState ? "fa-spin" : null;

    return (
        <>
            <div className="counter p-3">
            <h1 className="card" ><i className={"far fa-clock " + classForClock}></i></h1>
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