import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login.js';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors:[]
    }
  }

  onSubmit({email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch( ({ graphQLErrors }) => {
      const errors = graphQLErrors.map( err => err.message );
      this.setState({ errors });
    });
  }

  // way to render validation errors
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm 
          onSubmit={this.onSubmit.bind(this)} 
          errors={this.state.errors}
        />
      </div>
    );
  };
}

export default graphql(mutation)(LoginForm);