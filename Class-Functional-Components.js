// Class Components...........
import React from 'react';

class Greeting extends React.components{
  render(){
    return <h1>Hello {this.props.name} </h1>
  }
}
export default Greeting;

// Functional Components..........
import React, {useState} from 'react';

functional Greeting({name}){
    return <h1>hello, {name} </h1>;
}

export default Greeting;

    
