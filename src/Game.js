import React from "react";

class Game extends React.Component {
  render() {
    return (
      <div class="game">
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export { Game };
