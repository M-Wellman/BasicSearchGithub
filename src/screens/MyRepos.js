import React from 'react';
import Header from '../components/Header';
let key = 0;

class MyRepos extends React.Component {
  state = {
    user: "",
    repos: []
  };

  searchGithub = () => {
    fetch("https://api.github.com/search/repositories?q=user:" + this.state.user)
      .then(resp => resp.json())
      .then(respJson => {
        let repos = respJson.items.map(item => <div key={key++}>{item.git_url}</div>)
        this.setState({repos: repos});
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
  };

  render() {
    return (
      <div className="container">
        <Header title="MyRepos" />
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Github Username"
            value={this.state.user}
            onChange={user => {
              this.setState({user: user.target.value});
            }}
          />
          <input type="submit" value="submit" />
        </form>
        <ul>
          {this.state.repos}
        </ul>
      </div>
    );
  }
};

export default MyRepos
