import React, { Component } from "react";

import "./App.css";

import { NavBar } from "./components/NavBar";

import { InteractionUI } from "./components/InteractionUI";

class Dummy extends Component {
  onDelete = () => {
    console.log("Destroyyyyy!!!", this.props.interaction.prompt);
  };

  render() {
    return (
      <div>
        {this.props.interaction.prompt}
        <button className="btn btn-danger" onClick={this.onDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export class App extends Component {
  interactions = [
    { prompt: "create a class", response: "class created", id: 1 },
    { prompt: "😍", response: "😘", id: 2 },
  ];

  renderInteraction(inter) {
    return <InteractionUI key={inter.id} interaction={inter} />;
  }

  onAddInteraction = (evt) => {
    evt.preventDefault();
    console.log("Adding interaction", evt);

    this.interactions.push({
      prompt: "hola",
      response: "hola",
      id: 3,
    });
  };

  render() {
    return (
      <>
        <NavBar />

        <h1>Prompt Storer</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat
          in aspernatur qui excepturi, aliquam neque quasi architecto sapiente
          ex ratione dignissimos dolores a, nemo ullam explicabo nihil
          distinctio voluptates.
        </div>

        <h2>Prompts</h2>
        <form>
          <div className="mb-3">
            <label className="col-form-label">
              Enter a prompt:{" "}
              <input
                className="form-control mx-1"
                type="input"
                id="prompt"
              ></input>
            </label>
          </div>
          <div className="mb-3">
            <label className="col-form-label">
              Enter the response:{" "}
              <input
                className="form-control mx-1"
                type="input"
                id="response"
              ></input>
            </label>
          </div>
          <button
            onClick={this.onAddInteraction}
            className="btn btn-primary"
            type="submit"
          >
            Add Prompt
          </button>
        </form>

        <ul>
          {this.interactions.map(this.renderInteraction)}

          <li>
            Dalle Prompt: "create a class" Response: "class created"
            <img
              width="100px"
              src="https://johnguerra.co/img/John_Guerra_2011_small.jpg"
              alt="google logo"
            />
          </li>
        </ul>

        {this.interactions.map((inter) => (
          <Dummy key={inter.id} interaction={inter} />
        ))}
      </>
    );
  }
}

export default App;
