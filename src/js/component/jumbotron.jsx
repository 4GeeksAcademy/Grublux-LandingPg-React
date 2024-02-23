import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const JumboTron = () => {
	return (
		<>
            <div className="=row d-flex justify-content-center">
                <div className="col-11 myjumbotron">
                    <h1>A Warm Welcome!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel cursus quam. Sed vel malesuada ante, vitae suscipit arcu. Integer eget fermentum lectus. Etiam at auctor mi, quis iaculis neque. Fusce vitae porta ante. Proin quis elit massa. Fusce vitae aliquam elit</p>
                    <button type="button" className="btn btn-primary">Call to action!</button>
                </div>
            </div>
        </>
        
	);
};

export default JumboTron;