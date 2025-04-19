
// stateless component..............
import React from 'react';
function Welcome({name}){
    return <h1>Hello, {name} </h1>
    
}

export default Welcome;

<Welcome name={"Sarah"}/>

  // stateful component......
  const Counter=()=>{
    const[count,setCount]=useState(0);
    
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    
    return(
        <div>
        <p>Current count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
        )
}
