import React from "react";
import NavBar from "./navbar";
import JumboTron from "./jumbotron";
import MyCard from "./mycard";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="main">
			<div className="row d-flex justify-content-center">
				<NavBar />				
			</div>
			<div className="row d-flex justify-content-center">
				<JumboTron />
			</div>
			<div className="row d-flex justify-content-center">
				<MyCard />
			</div>
		</div>
	);
};

export default Home;
