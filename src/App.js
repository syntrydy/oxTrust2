import React from "react";
import axios from "axios";
import NavBar from "./components/layouts/NavBar";
import UserList from "./components/layouts/UserList";
import SearchBox from "./components/layouts/SearchBox";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&clientId=${process.env.GITHUB_CLIENT_ID}&clientSecret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items });
    this.setState({ loading: false });
  };
  clearUsers = () => {
    this.setState({ users: [] });
    this.setState({ loading: false });
  };
  render() {
    return (
      <div>
        <NavBar />
        <SearchBox
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          canClear={this.state.users.length > 0 ? true : false}
        />
        <UserList loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
