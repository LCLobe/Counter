import React from "react";

import useAppContext from "../store/Context.jsx";



const Alert = ()=>{

    const {actions} = useAppContext();
    const {removeAlert} = actions; 
    
    return (
        <>
            <div className="alert alert-warning p-1" role="alert">
                <h1>Your time... is over.</h1>
                <button type="button" className="btn btn-warning" id="liveAlertBtn" onClick={removeAlert} aria-label="Close" ><i className="fas fa-times"></i></button>
            </div>

        </>
   
    )
}

export default Alert;