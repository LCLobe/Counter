import React, {useEffect} from "react";

import useAppContext from "../store/Context.jsx";

import Counter from "../components/Counter.jsx";
import ButtonsFunctions from "../components/ButtonsFunctions.jsx";
import CountdownWithAlert from "../components/CountdownWithAlert.jsx";


//include images into your bundle

const Home = () => {

	const {store} = useAppContext();
	const {counterState, counterValue, counterDirection} = store;

	return (
		<div className="text-center container-fluid">
			<ButtonsFunctions active={counterState} />
			<Counter initNumber={counterValue} ascending={counterDirection}/>
		</div>
	);
};

export default Home;
