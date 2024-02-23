import React from "react";
import NavBar from "./navbar";
import JumboTron from "./jumbotron";
import MyCard from "./mycard";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import cardImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	var myCardArray = [{
		title: "whatever",
		imageUrl: "https://cdn.pixabay.com/photo/2024/01/07/16/00/grey-heron-8493489_1280.png",
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		buttonUrl: "...",
		buttonLabel: "Find out more!",
		bgColor: "blue"
	},
	{
		title: "whatever",
		imageUrl: "https://cdn.pixabay.com/photo/2024/01/07/16/00/grey-heron-8493489_1280.png",
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		buttonUrl: "...",
		buttonLabel: "Find out more!",
		bgColor: "purple"
	},
	{
		title: "whatever",
		imageUrl: "https://cdn.pixabay.com/photo/2024/01/07/16/00/grey-heron-8493489_1280.png",
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		buttonUrl: "...",
		buttonLabel: "Find out more!",
		bgColor: "red"
	},
	{
		title: "whatever",
		imageUrl: "https://cdn.pixabay.com/photo/2024/01/07/16/00/grey-heron-8493489_1280.png",
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		buttonUrl: "...",
		buttonLabel: "Find out more!",
		bgColor: "yellow"
	}
	]	

	return (
		<div className="main">
			<NavBar />	
			<div className="row d-flex justify-content-center">
				<JumboTron />
			</div>
			<div className="row d-flex justify-content-center">
				<div className="col-11">
					<div className="row d-flex justify-content-center">
							{myCardArray.map((e, index) => {
								return <MyCard
								title={e.title}
								imageUrl={e.imageUrl}
								description={e.description}
								buttonUrl={e.buttonUrl}
								buttonLabel={e.buttonLabel}
								bgColor={e.bgColor}
								key = {index}
							/>
							})}					
					</div>
				</div>				
			</div>
		</div>
	);
};

export default Home;
