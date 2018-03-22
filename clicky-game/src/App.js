import React from "react";

import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends React.Component {
  
  state = {
    friends: friends,
    score: 0,
    losses: 0
   };

    //let alreadyClicked = false;

  randomizer(val){

    if (this.state.friends[val].clicked){
        console.log("Got you");
        this.state.score = 0;
        this.state.losses++;
        console.log("losses"+this.state.losses)
    }
    else {
      this.state.friends[val].clicked = true;
      this.state.score++;
    }
    let tmpImages = [], 
    arrLength = this.state.friends.length

    for (var i = 0; i < arrLength; i++){
      let randNum = Math.floor(Math.random() * this.state.friends.length)
      tmpImages.push(this.state.friends.splice(randNum,1)[0]);
    }
    this.setState({friends:tmpImages})

    console.log("score" + this.state.score)
    

    //if true reset game
  }
  // a static function that uses the val param to lookup the friend
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
