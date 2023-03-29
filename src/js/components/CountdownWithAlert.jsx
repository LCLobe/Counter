import React, { useEffect } from "react";

import useAppContext from "../store/Context.jsx";

const CountdownWithAlert = ()=> {

    const {store, actions}=useAppContext();
    const {inputValue} = store;
    const {handlerInput, handlerInputButton, handlerEnterKey} = actions;

    return (
        <div className="input-group mb-3 w-75 mx-auto">
            <span className="input-group-text" id="inputGroup-sizing-default">Countdown from:</span>
            <input type="number" className="form-control" value={inputValue} onChange={handlerInput} onKeyDown={handlerEnterKey} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            <button type="button" className="btn btn-outline-light" onClick={handlerInputButton}>Launch!</button>
        </div>
    )
};

export default CountdownWithAlert;