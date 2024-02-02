import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class InteractionUI extends Component {
  render() {
    return (
      <li>
        Prompt: {this.props.interaction.prompt} <br /> Response:{" "}
        {this.props.interaction.response}
      </li>
    );
  }
}
InteractionUI.propTypes = {
  interaction: PropTypes.object.isRequired,
};
