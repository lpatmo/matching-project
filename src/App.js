import React from "react";
import Column from "./Components/Column";
import cardData from './cardData'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //instead of an object here, should be cards: cardData
      cards: [
        // {
        // id: Number,
        // name: String,
        // description: String,
        // category: String
        // }

        {
          id: 1,
          name: "Sebbel",
          description: "Mentor as a React Gaurdian Angel",
          category: "mentor"
        }
      ]
    };
  }

  getCards(category) {
    // return all cards with category as category
    const cards = this.state.cards.filter(card => card.category === category);

    return cards;
  }

  // sebbel is your react guardian angel

  render() {
    return (
      <div className="App">
        <Column name="Looking for mentors" cards={this.getCards("mentee")} />
        <Column
          name="Looking to teach/mentor"
          cards={this.getCards("mentor")}
        />
        <Column
          name="Looking for OS projects to contribute to"
          cards={this.getCards("OS")}
        />
        <Column
          name="Looking for contributors"
          cards={this.getCards("contributor")}
        />
      </div>
    );
  }
}

export default App;
