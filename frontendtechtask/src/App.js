import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent/NewComponent.js';
class App extends Component 
{
    state=
    {
      tekst: 'Welcome to new component.'
    }

    textInputedHandler = (event) =>
    {
        this.setState({
            tekst: event.target.value
        })
    }

  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <NewComponent
            tekst={this.state.tekst}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" onChange={this.textInputedHandler}/>
      </div>
    );
  }
}

export default App;