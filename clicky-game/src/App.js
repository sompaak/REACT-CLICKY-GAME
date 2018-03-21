import React from "react";

import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";


var random = function(){


  for (var i =0; i< friends.length; i++){
   friends = friends[Math.floor(Math.random() * friends[i].length)];

  }
}


random()

class App extends React.Component {

  state = {
    friends: friends
   };

  render(){
    return(
        <Wrapper>
        <Title />
          {
           this.state.friends.map(friend => (
              <FriendCard
                  image = {friend.image}
              />
            ))
          }
          </Wrapper>
      );
   }
}

export default App;
