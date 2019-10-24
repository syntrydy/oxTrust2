import React from "react";
import axios from "axios";
import Drawer from "./components/layouts/MyDrawer";
import UserList from "./components/layouts/UserList";
import UserDetail from "./components/layouts/UserDetail";
import SearchBox from "./components/layouts/SearchBox";
import About from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
class App extends React.Component {
  state = {
    users: [],
    user: {},
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
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}&clientId=${process.env.GITHUB_CLIENT_ID}&clientSecret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data });
    this.setState({ loading: false });
  };
  clearUsers = () => {
    this.setState({ users: [] });
    this.setState({ loading: false });
  };
  render() {
    return (
      <Router>
        <Drawer />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <SearchBox
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  canClear={this.state.users.length > 0 ? true : false}
                />
                <UserList
                  loading={this.state.loading}
                  users={this.state.users}
                />
              </React.Fragment>
            )}
          ></Route>
          <Route
            exact
            path="/user/:login"
            render={props => (
              <UserDetail
                {...props}
                getUser={this.getUser}
                user={this.state.user}
              />
            )}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
