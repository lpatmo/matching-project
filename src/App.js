import React from "react";
import Column from "./Components/Column";
import cardData from './cardData'
import Form from "./Components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //instead of an object here, should be cards: cardData
      cards: cardData,
      activeForm: true
    };
  }

  handleSubmit = stateObj => {
    console.log(stateObj);
    // Deconstruct `stateObj` and add as a new object in `this.state.cards`

    // ID needs to be added
    //TODO: Make sure the id updates correctly (and does not equal the very last card ID)
    let lastCardId = this.state.cards[this.state.cards.length-1].id 
    this.setState(prevState => {
      console.log(prevState)
      console.log(lastCardId)
      stateObj['id'] = lastCardId + 1;
      prevState.cards.push(stateObj);
      console.log(this.state.cards);
    });
  };

  toggleForm = () => {
    this.setState({activeForm: !this.state.activeForm })
  }

  getCards(category) {
    // return all cards with category as category
    const cards = this.state.cards.filter(card => card.category === category);
    return cards;
  }

  render() {
    return (
      <div className="App">
        <div className="column">
          <button onClick={this.toggleForm}>Add Card</button>

          { this.state.activeForm ? <Form handleSubmit={this.handleSubmit}/> : '' }
        </div>
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
