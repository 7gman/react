import React, { Component } from "react";

import "./Task.css"

class Task extends Component {
    render(){

        const {task} = this.props;
        const taskcss = {border: '1px solid blue'};

        return(
            <div className="taskClass" style={taskcss} key={task.id}>
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