import React from "react";

import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends: friends
    
   };

  randomizer(val){
    console.log("=============", val)
    //if function return bool false
    let images = [], img = [], 
        tempArr = friends.length > 1 ? friends : this.state.friends, 
        arrLength = tempArr.length

    for (var i = 0; i < arrLength; i++){
      let randNum = Math.floor(Math.random() * tempArr.length)
      images.push(tempArr.splice(randNum, 1))   
    }
    for (i = 0; i<images.length; i++){
      img.push(images[i][0])
    }

    this.setState({friends:img})
    //if true reset game
  }
  // a function that uses the val param to lookup the friend
  // then check friend object for alreadyClicked field
  // check bool return true or false  

  render(){
    return(
        <Wrapper>        
          {
           this.state.friends.map((friend, index) => (
              <FriendCard key={index}
                  image = {friend.image}
                  clickHandler={this.randomizer.bind(this, index)}
              />
            ))
          }
        </Wrapper>
      )
   }
}

export default App;
