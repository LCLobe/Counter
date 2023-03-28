import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {

    //States
    const [seconds, setSeconds] = useState(0);
    const [counterValue, setCounterValue] = useState(0);
    const [counterState, setCounterState] = useState(true);
    const [directionAscending, setdirectionAscending] = useState(true);
    const [inputValue, setInputValue] = useState(0);
    const [alarmState, setAlarmState] = useState(false);

    //Hooks
    const resetCounter = ()=>{
        setCounterValue(prev=>0);
        setdirectionAscending(true);
    }
    const toggleCounterState = ()=>{
        setCounterState(prev => !prev);
    }
    const handlerInput = (event)=>{
        setInputValue(prev=>event.target.value);
    }
    const handlerInputButton = ()=>{
        setCounterValue(prev=>inputValue);
        setdirectionAscending(prev=>false);
        setCounterState(prev=>true);
    }
    const handlerEnterKey = (event)=>{
        //setInputValue(prev=>event.target.value);
        if (event.key === 'Enter') {
            handlerInputButton();
          }
    }
    const removeAlert = ()=>{
        setAlarmState(false);
    }

    //Flux
    const store ={
        seconds,
        counterValue,
        counterState,
        directionAscending,
        inputValue,
        alarmState
    };
    const actions ={
        setSeconds,
        setCounterValue,
        setCounterState,
        setdirectionAscending,
        resetCounter,
        toggleCounterState,
        setInputValue,
        handlerInput,
        handlerInputButton,
        setAlarmState,
        handlerEnterKey,
        removeAlert
    };

    

    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
    );

};

const useAppContext = ()=>useContext(Context);
export default useAppContext;