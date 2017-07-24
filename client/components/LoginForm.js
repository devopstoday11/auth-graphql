import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login.js';

class LoginForm extends Component {
  onSubmit({email, password}) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  // way to render validation errors
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  };
}

export default graphql(mutation)(LoginForm);