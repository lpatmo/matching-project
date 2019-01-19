import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      'name': '',
      'description': '',
      'email': '',
      'category': ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label for="name">
            Name
          </label>
          <input type="text" name="name" placeholder="Name" value={this.state.name} />
        </div>
        <div>
          <label for="description">
            Description
          </label>
          <textarea type="textarea" name="description" placeholder="description" value={this.state.description} />
        </div>
        <div>
          <label for="email">
            Email
          </label>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div>
          <label for="category">
            Category
          </label>
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
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
