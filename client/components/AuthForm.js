import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  onSubmit(event) {
    // TODO: some boilerplate maybe refactor?
    event.preventDefault();

    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s4">
          
          <div className="input-field">
            <input
              placeholder="Email"
              value={email}
              onChange={e => this.setState({ email: e.target.value})}
             />
          </div>

          <div className="input-field">
            <input 
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value})}
            />
          </div>
          <button className="btn" type="submit">Submit</button>

        </form>
      </div>

    );
  };
}

export default AuthForm;