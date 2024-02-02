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
  constructor(props) {
    super(props);
    this.state = {
      prompt: "write ",
      response: "",
      interactions: [
        { prompt: "create a class", response: "class created", id: 1 },
        { prompt: "😍", response: "😘", id: 2 },
      ],
    };
  }

  renderInteraction(inter) {
    return <InteractionUI key={inter.id} interaction={inter} />;
  }

  onAddInteraction = (evt) => {
    evt.preventDefault();
    
    const newInteraction = {
      prompt: this.state.prompt,
      response: this.state.response,
    };

    newInteraction.id =
      this.state.interactions.length > 0
        ? this.state.interactions.at(-1).id + 1
        : 1;

    console.log("newInteraction", newInteraction);

    this.setState({
      interactions: [...this.state.interactions, newInteraction],
    });
  };

  render() {
    console.log("render App", this.props, this.state);

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
        <form onSubmit={this.onAddInteraction}>
          <div className="mb-3">
            <label className="col-form-label">
              Enter a prompt:{" "}
              <input
                className="form-control mx-1"
                type="input"
                name="prompt"
                value={this.state.prompt}
                onInput={(event) => {
                  this.setState({ prompt: event.target.value });
                }}
              ></input>
            </label>
          </div>
          <div className="mb-3">
            <label className="col-form-label">
              Enter the response:{" "}
              <input
                className="form-control mx-1"
                type="input"
                name="response"
                value={this.state.response}
                onInput={(event) => {
                  this.setState({ response: event.target.value });
                }}
              ></input>
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Add Prompt
          </button>
        </form>

        <ul>
          {this.state.interactions.map(this.renderInteraction)}

          <li>
            Dalle Prompt: "create a class" Response: "class created"
            <img
              width="100px"
              src="https://johnguerra.co/img/John_Guerra_2011_small.jpg"
              alt="google logo"
            />
          </li>
        </ul>

        {this.state.interactions.map((inter) => (
          <Dummy key={inter.id} interaction={inter} />
        ))}
      </>
    );
  }
}

export default App;
