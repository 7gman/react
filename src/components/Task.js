import React, { Component } from "react";

class Task extends Component {
    render(){

        const {task} = this.props;

        return(
            <div key={task.id}>
                {task.name} - 
                {"ID:"+task.id} - 
                {task.description} - 
                {task.done}
                <input type="checkbox" />
                <button>Botón</button>
            </div>
        )
    }
}

export default Task;