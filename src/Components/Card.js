import React from "react";

class Card extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <article>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default Card;
