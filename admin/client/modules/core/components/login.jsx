import React from "react";
import "./login.css";
// import logo from "../../../../public/img/logo.svg";
// import backgroudImage from "../../../../public/img/Rectangle 5.png";

class Login extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.login(email, password);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <img src="/img/logo.svg" className="logo" alt="Logo" />
          <img
            src="/img/Rectangle 5.png"
            className="Rectangle-5"
            alt="imgbackground"
          />
          <div>
            <form
              className="Rectangle-6"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <h1 className="Log-in">Log In</h1>
              <div className="form-group">
                <label className="Email">Email :</label>
                <input
                  type="email"
                  className="input01"
                  ref="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="Password">Password :</label>
                <input
                  type="password"
                  className="input02"
                  ref="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit">
                <label className="button-text">Log in</label>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
