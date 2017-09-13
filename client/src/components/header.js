import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Header extends Component {
  renderContent() {
    return !this.props.currentUser ? (
      <li>
        <a href="/api/auth/github">
          Login With GitHub
        </a>
      </li>
    ) : (
      <li>
        <a href="/api/auth/logout">
          Logout
        </a>
      </li>
    );
  }

  render() {
    return (
      <nav className="nav-wrapper blue">
        <div>
          <Link
            to={this.props.currentUser ? "/api/auth/github" : "/"}
            className="brand-logo"
          >
            Data Structures & Algorithms
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

export default connect(null)(Header);