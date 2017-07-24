import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup.js';
import query from '../queries/CurrentUser';

class SignupForm extends Component {
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
        <h3>Sign Up</h3>
        <AuthForm 
          onSubmit={this.onSubmit.bind(this)} 
          errors={this.state.errors}
        />
      </div>
    );
  };
}

export default graphql(mutation)(SignupForm);