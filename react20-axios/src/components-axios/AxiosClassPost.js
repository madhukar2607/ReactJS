import React from 'react';
import axios from 'axios';

export default class AxiosClassPost extends React.Component {
  state = {
    title: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const post = {
      title: this.state.title
    };

    axios.post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Post Title:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}