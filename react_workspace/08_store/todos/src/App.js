import React, { Component } from "react";
import TodoContainer from './container/TodoContainer';
import TodoListContainer from './container/TodoListContainer';
import { inject, observer } from "mobx-react";

@inject('TodoStore')
@observer
class App extends Component {
  render() {
    const style={
      color: '#2f3b52',
      fontWeight: '900',
      margin: '2.5rem 0 1.5rem',
      textAlign:'center',
    }

    return (
      <div>
        <header style={style}>
            <h1> TODO It !</h1>
        </header>
        <TodoContainer/>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
