import React from "react";

import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";






class App extends React.Component {

  state = {
    friends: friends
   };

randomizer(){
  let images = [],
      img = [],
      tempArr = friends.length > 1 ? friends : this.state.friends,
      arrLength = tempArr.length
  for (var i = 0; i < arrLength; i++){
    let randNum = Math.floor(Math.random() * tempArr.length)
    images.push(tempArr.splice(randNum, 1))   
  }

  for (i = 0; i<images.length; i++){
    img.push(images[i][0])
  }


  console.log(img)
  this.setState({friends:img})
  //tempArr = friends;
}
  

  render(){
    console.log(this.state.friends)
    return(
        <Wrapper>
        <Title />
          {

           this.state.friends.map(friend => (
              <FriendCard
                  image = {friend.image}
                  clickHandler={this.randomizer.bind(this)}
              />
            ))
          }
          </Wrapper>
      );
   }
}

export default App;
