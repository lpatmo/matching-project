import React from "react";

class Form extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState;
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} />
        <input type="text" name="description" value={this.state.description} />
        <input type="email" name="email" />
        <select name="category" value={this.state.category}>
          <option value="mentorSignup">I want to teach/mentor</option>
          <option value="menteeSignup">I want a mentor</option>
          <option value="contributorSignup">
            I want to contribute to an OS project
          </option>
          <option value="projectSignup">
            I am looking for contributors to my OS project
          </option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
