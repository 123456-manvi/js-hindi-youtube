function Notes(){

let [notes,setNotes]=useState([])
return(
<ul>
{notes.map(note=>(
<li>{note.title}</li>
))}
</ul>
)}


// 2
import React from 'react'
import './App.css'
import {useState} from 'react';

function App(){
    
    const[counter,setCounter]=useState('Red');
    
    //const counter=useState(0);
    console.log(counter);
    
    let color='red';
    const changeColor=()=>{
        setColor('blue');
        color="Blue";
    }


return (
    <>
    <h1>my favourite color is {color}</h1>
    <button onClick={changeColor}>Blue</button>
    </>
    )
}

export default App;




// 3
import React from 'react'
import './App.css'
import {useState} from 'react';


function App(){
    return(
        <>
        <h1>ferrari</h1>
        <p>it is red rome from 2023</p>
        </>
        )
}

export default App;




// 4
import React from 'react'
import './App.css'
import {useState} from 'react';


function App(){
    const[car,setCar]=useState({
        brand:"ferrari",
        model:"roma",
        year:"2023",
        color:"red"
    });
    return(
        <>
        <h1>{car.brand}</h1>
        <h2>{car.model} {car.year} {car.color} </h2>
        </>
        )
}

export default App;




// 5
import React from 'react'
import './App.css'
import {useState} from 'react';


function App(){
    const[car,setCar]=useState({
        brand:"ferrari",
        model:"roma",
        year:"2023",
        color:"red"
    });
    
    const changeColor=()=>{
        setCar({color:"red"})
    }
    return(
        <>
        <h1>{car.brand}</h1>
        <h2>{car.model} {car.year} {car.color} </h2>
        <button onClick={changeColor}>Blue</button>
        </>
        )
}

export default App;




// 6
import React from 'react'
import './App.css'
import {useState} from 'react';


function App(){
    const[car,setCar]=useState({
        brand:"ferrari",
        model:"roma",
        year:"2023",
        color:"red"
    });
    
    const changeColor=()=>{
        setCar((car)=>{
            return {...car, color:"blue"}
        })
    }
    
    
    return(
        <>
        <h1>{car.brand}</h1>
        <h2>{car.model} {car.year} {car.color} </h2>
        <button onClick={changeColor}>Blue</button>
        </>
        )
}

export default App;

// 7
import React from 'react'
import './App.css'
import {useState} from 'react';


function App(){
    const[count,setCount]=useState(0);
    
    const increaseCount=()=>{
        setCount(count+1)
        setCount(prev=>prev+1)
    }
    
    return (
        <>
        <h1>count: {count} </h1>
        <button onClick={increaseCount}>Increase by 4</button>
        </>
        )
}

export default App;


// 8
import React from 'react'
import './App.css'
import {useState} from 'react';


function App(){
    const[count,setCount]=useState(0);
    
    const increaseCount=()=>{
        setCount(count=>count+1);
        setCount(count=>count+1);
        
    }
    return (
        <>
        <h1>count: {count} </h1>
        <button onClick={increaseCount}>Increase by 4</button>
        </>
        )
}

export default App;
