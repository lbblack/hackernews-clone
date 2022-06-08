import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="pure-g navbar">
          <img src="y18.gif" />
          <div class="pure-u-4-5 link-items">
            <a class="navbar-home" href="#">Hacker News</a>
            <a href="#">new</a>
            {" | "}
            <a href="#">past</a>
            {" | "}
            <a href="#">comments</a>
            {" | "}
            <a href="#">ask</a>
            {" | "}
            <a href="#">show</a>
            {" | "}
            <a href="#">jobs</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;