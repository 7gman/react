import React from "react";
import Task from "./Task"

const Tasks = (props)=>{
    return(
        props.tasks.map((e)=> <Task task={e} key={e.id}/>)
    )
}

export default Tasks;