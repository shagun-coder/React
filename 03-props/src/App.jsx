import React from 'react'
import Cards from "./components/cards"
const App = () =>{
  return (
    <div className ="parent">
      <Cards user="aman" age='18' img="https://images.unsplash.com/photo-1723113930229-6c41a7ae5c92?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnN8ZW58MHx8MHx8fDA%3D"/>
      <Cards user="Sarthak" age="20" img="https://plus.unsplash.com/premium_photo-1661414561433-cfeffc4430da?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Cards user="Arjun" age="23" img="https://plus.unsplash.com/premium_photo-1681426478241-11b262dd1d21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" />
      
    </div>
  );
};
export default App