import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({people: users}));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.people.map(people => (
            <h1 key={people.id}> {people.name} </h1>
            )
          )
        }
      </div>
    );
  }
}


export default App;
