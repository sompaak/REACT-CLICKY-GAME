import React from "react";

import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import ScoreBoard from "./components/ScoreBoard"
import friends from "./friends.json";

class App extends React.Component {
  
  state = {
    friends: friends,
    score: 0,
    topScore: 0
   };

  randomizer(val){

    if (this.state.friends[val].clicked){
        console.log("Got you");
        this.state.topScore = this.state.score;
        this.state.score = 0;
        this.state.friends[val].clicked = false;

    }

    else {
      this.state.friends[val].clicked = true;
      this.state.score++;

    if(this.state.score > this.state.topScore)
      this.state.topScore++;
    }

    let tmpImages = [], 
    arrLength = this.state.friends.length

    for (var i = 0; i < arrLength; i++){
      let randNum = Math.floor(Math.random() * this.state.friends.length)
      tmpImages.push(this.state.friends.splice(randNum,1)[0]);
    }
    this.setState({friends:tmpImages})

    console.log("score" + this.state.score)
     
  }
  
  render(){
    return(

      <div>
        <ScoreBoard

          score = {"score:" + this.state.score}
          topScore = {"top score:" + this.state.topScore}
        />

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
      </div>
      )
   }
}

export default App;
