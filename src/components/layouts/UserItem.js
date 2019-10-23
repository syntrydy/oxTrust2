import React from "react";

function UserItem (props) {
    const {login, html_url, avatar_url}=props.user;
    return (
        <div className="col s12 m3">
          <div className="card blue-grey darken-1">
            <div className="card-image">
              <img
                src={avatar_url}
                alt=""
                style={{height: "300px" }}
              />
              <span className="card-title">{login}</span>
            </div>
            <div className="card-content">
              <p></p>
            </div>
            <div className="card-action">
              <a href={html_url}>More about {login}</a>
            </div>
          </div>
        </div>
    );
  }

export default UserItem;
