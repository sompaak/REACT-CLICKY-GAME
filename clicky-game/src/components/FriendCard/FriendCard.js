import React from "react";
import "./FriendCard.css";





const FriendCard = props => (
 
    <div className="img-container">
      <img className ="pics" alt="" style={{height:'200px',width:'100px'}} src={props.image} />
    </div>
    
);

export default FriendCard;
