import React, { Component } from 'react';

class LandingNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: ''
    }
  }

  // Scrollspy
  scrollSpy(section) {
    window.addEventListener('scroll', function () {
      let position = window.pageYOffset,
          commuterLocation = document.getElementById('commuter-section').offsetTop - 100;

      // if ( position < 50 ) {
      //   this.setState = { currentSection: '' }
      // }

      if (position < commuterLocation && position > 51 ) {
        this.setState = { currentSection: 'about' }
      }


    });
  }

  // Scroll to area
  scrollToArea(section) {
    let area = document.getElementById(section);
    console.log(area);
    area.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    this.scrollSpy();

    return (
      <nav id="landing-navigation">
        <div className="logo">
          <h1 className="border">sawco.</h1>
        </div>

        <ul>
          <li onClick={ () => this.scrollToArea('about') }>about</li>
          <li onClick={ () => this.scrollToArea('commuter-section') }>commuter series</li>
          <li onClick={ () => alert() } className="home-nav">home series</li>
          <li onClick={ () => alert() } className="photo-nav">photo</li>
          <li onClick={ () => alert() } className="blog-nav">blog</li>
        </ul>

        <div className="bottom-area">
          <span>killin it since 2017</span>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </div>
      </nav>
    )
  }
}

export default LandingNavigation;
