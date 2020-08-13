import React from 'react';
// import uuid from "uuid"


import "bootstrap/dist/css/bootstrap.min.css"

import "@fortawesome/fontawesome-free/css/all.min.css"


import List from "./components/TodoList"
import InputForm from "./components/TodoForm"






class App extends React.Component{
  render(){
    return( <div>
              <h2>TODO APP</h2>
              <InputForm/>
              <List/>
             
              
            </div>)
  }
}

export default App;
