import React from 'react';

function Child(props){
    return <h1>Hello, {props.name}</h1>;
}

export default Child;


props..............

const Counter=()=>{
    const[count,setCount]=useState(0);
    
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    
    return(
        <div>
        <p>Current count: {count} </p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        )
}
