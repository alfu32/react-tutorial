import React from "react";

export class Board extends React.Component {
  render() {
    return (
      <div class="board">
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}
