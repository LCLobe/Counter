import React from "react";

import Counter from "../components/Counter.jsx";
import Tools from "../components/Tools.jsx";
//include images into your bundle


const Home = () => {
	return (
		<div className="text-center container-fluid">
			<Counter />
			<Tools />
		</div>
	);
};

export default Home;
