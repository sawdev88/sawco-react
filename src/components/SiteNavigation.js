import React, { Component } from 'react';

class SiteNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="site-navigation">
        <div className="logo">
          <h1 className="border">sawco.</h1>
        </div>

        <ul>
          <li className="about-nav"><a href="#about">about</a></li>
          <li className="commuter-nav"><a href="#commuter-series">commuter series</a></li>
          <li className="home-nav"><a href="#home-series">home series</a></li>
          <li className="photo-nav"><a href="#photo">photo</a></li>
          <li className="blog-nav"><a href="#blog">blog</a></li>
        </ul>

        <div className="bottom-area">
          <span>killin it since 2017</span>
          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      </nav>
    )
  }
}

export default SiteNavigation;
