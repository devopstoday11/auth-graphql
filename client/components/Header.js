import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

// query to get user that is currently signed in

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) { return <div />; }

    console.log(user)
    if (user) {
      return <div>Logout</div>
    } else {
      return (
        <div>
          Sign In / Login
        </div>
      );
    }

  }

  render() {
    // console.log(this.props.data);
    return (
      <nav >
        <div className="nav-wrapper">
          {this.renderButtons()}
        </div>
      </nav>
    );
  };
}

export default graphql(query)(Header);