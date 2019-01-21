import React from "react";
import Card from "./Card";

class Column extends React.Component {

  render(props) {
    const columnCards = this.props.cards.map(card => {
      return <Card key={card.id} name={card.name} email={card.email} description={card.description} />;
    });

    return (
      <div className="column">
        <h1>{this.props.name}</h1>
        {columnCards}
      </div>
    );
  }
}

export default Column;
