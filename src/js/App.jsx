import React from "react";
import {ContextProvider} from "./store/Context.jsx";

import Home from "./view/home.jsx";

const App = ()=>{

    return (
        <ContextProvider>
            <Home />
        </ContextProvider>
    );
}

export default App;