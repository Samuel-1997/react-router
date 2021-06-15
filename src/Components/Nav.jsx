import React from 'react';


const Nav = (props) => {
   return (
      <nav> {props.toggle ?  <h1>Nav</h1> : ""} </nav>   
   //  <nav>
   //  <li>Home</li>
   //  <li>Personal</li>
   //  <li>Analyrics</li>
   //  <li>Tweets</li> 
   //  </nav>
   )

}


export default Nav;
