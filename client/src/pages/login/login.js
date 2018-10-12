import React, { Component } from 'react';

class Login extends Component{
  render() {
    return(
      <div className = "container">
        <div className="row">
          <div className="col s12">
            <h3>Select a Verification Service</h3>
            <ul>
              <li><a id="google" className="btn btn-waves white blue-text" href="http://localhost:8080/api/auth/google">Google</a></li>
              <li><a id="github" className="btn btn-waves white black-text" href="/notyet">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;