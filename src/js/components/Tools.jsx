import React from "react";

const Tools = ()=>{

    return (
        <div>
            <div>
                <button ClassName="button" onClick={""}><span className="myButton" >Stop</span></button>
                <button ClassName="button" onClick={""}><span className="myButton" >Resume</span></button>
                <button ClassName="button" onClick={""}><span className="myButton" >Reset</span></button>

            </div>
            <div>
            <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
                <input type="number" />
                <input type="text" />
                <button>Set</button>
            </div>
        </div>

    )
}

export default Tools;