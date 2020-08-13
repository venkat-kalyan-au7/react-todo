import React from "react"
import Item from "./TodoItem"

class TodoList extends React.Component{
    render(){
      return( <div>
                todo list
                <Item/>
              </div>)
    }
  }

export default TodoList