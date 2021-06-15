import React, {useState} from 'react';
import "./Components/App.css";
//import Components
 import Nav from "./Components/Nav";
 import Video from "./Components/Video"
// import Tweets from "./Components/Tweets";

function App() {
  //Writ Javascript HEre
  const [counter, setCounter] = useState(0)
   const [toggle, setToggle] = useState(false);
  
 
  const incrementer  = ()  => {
    if(counter < 10) {
      setCounter((prev) => prev + 1)
    }else {
      setCounter(0)
    }
    
  
    console.log(counter);
}

const toggler = () => {
  setToggle(prev => !prev);
}

const count = () => {

    if(counter > 0) {
      setCounter((prev) => prev - 1)
    }
}

  return (
    <div className="App">
        <h1 className={toggle ? "active" : ""}>Hello React</h1>
        <h2>Counter {counter}</h2>
        <button onClick={incrementer}>Click</button>
        <button onClick={toggler}>Toggle</button>
        <button onClick={count}>Decrementer</button>
        <Nav toggle={toggle} />
        <Video nr={counter} setToggle={toggler} />
        {/* <div className="home">
           <Nav />
          <Tweets  /> 
        </div> */}
    </div>
  );
}

export default App;

// ECRIRE LES TROIS COMPONENT (Message1.jsx,Message2.jsx,Message3.jsx)
//ECRIRE des paragraphe dans les trois component
// afficher les trois component
//passer trois variables de votre choix vers les trois component
//ecrire ChildMessage.jsx et importé dans Message1 component
// passé un variable de votre choix vers le ChildMessage component