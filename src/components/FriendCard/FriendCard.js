import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

 <div>
    
    <div className ="row">

    	<div className = "col-md-3"></div>
    	<div className = "col-md-6">

		    <div onClick={props.clickHandler} className="img-container">
		      <img className ="pics" style={{height:'300px',width:'200px'}} src={props.image} />
		    </div>
		</div>
		<div className = "col-md-3"></div>
	</div>

 </div>
    
);

export default FriendCard;