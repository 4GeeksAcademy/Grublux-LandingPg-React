import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import cardImage from "../../img/rigo-baby.jpg";




//create your component
const MyCard = (props) => {
	return (		
			<div className="card" style={{width: "18rem", backgroundColor: props.bgColor}}>
				<img src={props.imageUrl} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
				</div>
			</div>
	);
};


MyCard.propTypes = {
	// 2) Add here the new properties into the proptypes object
	title: PropType.string,	
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	bgColor: PropType.string,
};


export default MyCard;