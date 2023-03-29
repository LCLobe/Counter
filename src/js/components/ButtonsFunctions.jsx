import React from "react";

import useAppContext from "../store/Context.jsx";

const ButtonsFunctions = ()=>{

    const {store, actions} = useAppContext();
    const {resetCounter, toggleCounterState} = actions;
    const {counterState} = store;

    return (
        <div className="button-functions p-3 bg-black d-flex justify-content-around">            
            {counterState
                ? <button className="myButton btn btn-outline-danger" onClick={toggleCounterState}>Stop</button>
                : <button className="myButton btn btn-outline-success" onClick={toggleCounterState}>Resume</button>
            }
            <button className="myButton btn btn-outline-warning" onClick={resetCounter}>Reset</button>
        </div>
    )
};

export  default ButtonsFunctions;