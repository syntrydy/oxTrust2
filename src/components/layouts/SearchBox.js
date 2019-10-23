import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    text: ''
  };
 
  onChange = e => {
    this.setState({ text: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if(this.state.text === ''){
        window.M.toast({html: 'The search pattern is empty, please provide a value.'})
    }else{
        this.props.searchUsers(this.state.text);
        this.setState({ text: "" });
    }
  };
  render() {
    const {canClear,clearUsers} = this.props;
    return (
      <div className="row">
        <form className="col s11 m11" onSubmit={this.onSubmit}>
          <div className="input-field col s10 m10">
            <i className="material-icons prefix"></i>
            <input
              name="text"
              id="icon_prefix"
              type="text"
              className="validate"
              value={this.state.text}
              onChange={this.onChange}
            />
            <label htmlFor="icon_prefix">Type someting here to search</label>
          </div>
          <div className="input-field col s2 m1">
            <button
              className="btn waves-effect waves-light pulse"
              type="submit"
              name="action"
            >
              Sarch
              <i className="material-icons right fa fa-search"></i>
            </button>
          </div>
        </form>
        {canClear && (
          <div className="input-field col s2 m1">
            <button
              className="btn waves-effect waves-light red"
              type="submit"
              name="action"
              onClick={clearUsers}
            >
              Clear
              <i className="material-icons right fa fa-cancel"></i>
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default SearchBox;
