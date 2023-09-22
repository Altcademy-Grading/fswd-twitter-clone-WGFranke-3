// layout.jsx
import React from 'react';

const Layout = (props) => {
  function SignUpButtonClick() {
    function authenRedirect() {
      authenticate(function(response) {
        if(response.authenticated) {
          window.location.replace("/feeds");
        }
      });
    };
  }
  function handleSubmitLogIn(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    fetch('api/sessions', { method: form.method, body: {'user':formJson} });
  }
  function handleSubmitSignUp(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    fetch('api/users', { method: form.method, body: {'user':formJson} });
  }
  return (
    <React.Fragment>
      <>
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <i className="fa fa-twitter" />
        </a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            language: <strong>English </strong>
            <span className="caret" />
          </a>
          <ul className="dropdown-menu row" role="menu">
            <li className="col-xs-12">
              <a href="#">Bahasa Malaya</a>
            </li>
            <li className="col-xs-12">
              <a href="#">Dansk</a>
            </li>
            <li className="col-xs-12">
              <a href="#">English</a>
            </li>
            <li className="col-xs-12">
              <a href="#">Suomi</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <div className="main">
    <div className="container">
      <div className="row">
        <div className="front-card col-xs-10 col-xs-offset-1">
          <div className="col-xs-6 welcome">
            <div id="welcome-text">
              <h1>
                <strong>Welcome to Twitter.</strong>
              </h1>
              <p>
                Connect with your friends — and other fascinating people. Get
                in-the-moment updates on the things that interest you. And watch
                events unfold, in real time, from every angle.
              </p>
            </div>
            <p>
              <a href="#" id="twit-info">
                Hack Pacific - Backendium Twitter Project
              </a>
            </p>
            <p>
              <a href="#" id="twit-account">
                Tweet and photo by @Hackpacific
                <br />
                3:20 PM - 15 December 2016
              </a>
            </p>
          </div>
          <div className="log-in col-xs-4 col-xs-offset-1">
            <form method="post" onSubmit={handleSubmitLogIn}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control username"
                  placeholder="Username"
                  name = "username"
                />
              </div>
              <div className="form-group col-xs-8">
                <input
                  type="password"
                  className="form-control password"
                  placeholder="Password"
                  name = "password"
                />
              </div>
              <button
                id="log-in-btn"
                className="btn btn-default btn-primary col-xs-3 col-xs-offset-1"
              >
                Log in
              </button>
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
                <span> · </span>
              </label>
              <a href="#">Forgot password?</a>
            </form>
          </div>
          <div className="sign-up col-xs-4 col-xs-offset-1">
          <form method="post" onSubmit={handleSubmitSignUp}>
              <div className="new-to-t">
                <p>
                  <strong>New to Twitter?</strong>
                  <span> Sign Up</span>
                </p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control username"
                  placeholder="Username"
                  name = "username"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control email"
                  placeholder="Email"
                  name = "email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control password"
                  placeholder="Password"
                  name = "password"
                />
              </div>
              <button
                id="sign-up-btn"
                className="btn btn-default btn-warning pull-right"
                type="submit">
                Sign up for Twitter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </React.Fragment>
  );
}

export default Layout;