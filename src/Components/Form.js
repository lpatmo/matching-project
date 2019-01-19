import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      'name': '',
      'description': '',
      'email': '',
      'category': 'mentorSignup'
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Name" value={this.state.name} />
        </div>
        <div>
          <label htmlFor="description">
            Description
          </label>
          <textarea onChange={this.handleChange} type="textarea" name="description" placeholder="description" value={this.state.description} />
        </div>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input onChange={this.handleChange} type="email" name="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="category">
            Category
          </label>
          <select onChange={this.handleChange} name="category" value={this.state.category}>
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
