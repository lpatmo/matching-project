import React from "react";
import Card from "./Card";

class Column extends React.Component {
  constructor() {
    super();
  }

  changeParentState(event) {
    this.props.cards = [];
  }

  render() {
    const columnCards = this.props.cards.map(card => {
      return <Card key={card.id} name={card.name} description={card.description} />;
    });

    return (
      <div className="column">
        <button onClick={this.changeParentState}>Change Parent State</button>
        <h1>{this.props.name}</h1>
        {columnCards}
      </div>
    );
  }
}

export default Column;
