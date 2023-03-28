import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {

    //States
    const [seconds, setSeconds] = useState(0);
    const [counterValue, setCounterlValue] =useState(0);
    const [counterState, setCounterState]=useState(true);
    const [directionAscending, setdirectionAscending] =useState(true);

    //Hooks
    const resetCounter = ()=>{
        return setCounterlValue(prev=>0);
    }
    const toggleCounterState = ()=>{
        setCounterState(prev => !prev);
    }

    //Flux
    const store ={
        seconds,
        counterValue,
        counterState,
        directionAscending
    };
    const actions ={
        setSeconds,
        setCounterlValue,
        setCounterState,
        setdirectionAscending,
        resetCounter,
        toggleCounterState
    };

    

    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
    );

};

const useAppContext = ()=>useContext(Context);
export default useAppContext;