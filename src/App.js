import React from 'react';
import './App.css';

import tasks from './sample/task.json';
import Tasks from './components/Tasks';

console.log(tasks);

class App extends React.Component{

  state = {
    Tasks: tasks
  }

  render(){
    return(
      <div>
        <Tasks tasks={this.state.Tasks}/>
      </div>
    )
  }
}

export default App;
