import React from "react";

class Card extends React.Component {
  render(props) {
    return (
      <article className="card">
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.email}</p>
        <button>Edit</button>
      </article>
    );
  }
}

export default Card;
