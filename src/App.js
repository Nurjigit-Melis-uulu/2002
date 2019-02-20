import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    persons: [
      "Bakyt",
      "Aijan",
      "Avtandil"
    ],
    marka: "",
    model: "",
    newPersone: "",
    cars: [],
    // hidden: false,
    // age: 0,
    // rangeValue: 36 
  }

  // togglePersons = () => {
  //   this.setState({
  //     hidden: !this.state.hidden
  //   })
  // }

  addMarka = event => {
    this.setState(({
      marka: event.target.value
    }))
  }
  addModel = event => {
    this.setState({
      model: event.target.value
    })
  }

  render() {

    let persons = [];
    let cars = [];
    let marka = this.state.marka;
    let model = this.state.model;

    for (let i = 0; i < this.state.persons.length; i++) {
      persons.push(
        <li key={i}>{this.state.persons[i]}</li>
      );
    }
    
    for (let i = 0; i < this.state.cars.length; i++) {
      cars.push(
        <li key={i}>{this.state.cars[i]}</li>
      );
    }

    // let content = <h6>hidden content</h6>;
    // let rangeContent = <h6>It is Ok</h6>;

    // if (this.state.rangeValue <= 36 && this.state.rangeValue > 35) {
    //   rangeContent = <h6>It is Ok</h6>;
    // }
    // else if (this.state.rangeValue > 36 && this.state.rangeValue < 40) {
    //   rangeContent = <h3>You have a mild fever</h3>;
    // }
    // else if (this.state.rangeValue >= 40) {
    //   rangeContent = <h1>Dangerous!!!</h1>;
    // }
    // else if (this.state.rangeValue <= 34 && this.state.rangeValue > 29) {
    //   rangeContent = <h2>Sirius illness!!!</h2>;
    // }
    // else if (this.state.rangeValue <= 29) {
    //   rangeContent = <h4>You a deathed</h4>;
    // }


    // if (this.state.age >= 18) {
    //   content = <h1>Hello world!!!</h1>;
    // }
    // else {
    //   content = <h6>Hidden content!</h6>;
    // }

    // if (!this.state.hidden) {
    //   persons = this.state.persons.join(", ")
    // }

    return (
      <div className="App">
        <ul>
          {persons}
          <li>
            <input type="text" value={this.state.newPersone} 
              onChange={event => {
                this.setState({
                  newPersone: event.target.value
                })
              }}
            />
            <button
              onClick={ () => {
                const persons = [...this.state.persons];

                persons.push(this.state.newPersone);

                this.setState({
                  persons: persons,
                  newPersone: ""
                })
              }}
            >Add</button>
          </li>
        </ul>

        <ul>
          {cars}

          <li>
            <input type="text" onChange={this.addMarka} value={this.state.marka} />
            <input type="text" onChange={this.addModel} value={this.state.model} />

            <button onClick={() => {
                const cars = [...this.state.cars];

                cars.push(model + ", " + marka);

                this.setState({
                  cars: cars,
                  model: "",
                  marka: "",
                })
            }}>Add new car</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;




{/* <button onClick={this.togglePersons}
>Toggle</button>

{persons}

<input type="number" onChange={event => {
  this.setState({
    age: event.target.value
  })
}} />

{content}

<input type="range" max="50" min="0" value={this.state.rangeValue}
onChange={event => {
  this.setState({
    rangeValue: event.target.value
  })
}} />

<span>{this.state.rangeValue}</span>

{rangeContent} */}