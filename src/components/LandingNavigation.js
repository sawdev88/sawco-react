import React, { Component } from 'react';
import { smoothScroll } from '../utility/Helpers';

class LandingNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: ''
    }

    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick(section, index) {
    smoothScroll(document.getElementById(section).offsetTop);
    this.setState({ currentSection: index })
  }

  render() {
    return (
      <nav id="landing-navigation">
        <div className="logo">
          <h1 className="border">sawco.</h1>
        </div>

        <ul>
          <li className={ this.state.currentSection === 0 ? 'selected' : '' }
              onClick={ () => this.handleClick('about', 0) }>
              about
          </li>
          <li className={ this.state.currentSection === 1 ? 'selected' : '' }
              onClick={ () => this.handleClick('commuter-section', 1) }>
              commuter series
          </li>
          <li className={ this.state.currentSection === 2 ? 'selected' : '' }
              onClick={ () => this.handleClick('home-section', 2) }>
              home series
          </li>
          <li className={ this.state.currentSection === 3 ? 'selected' : '' }
              onClick={ () => this.handleClick('photo-section', 3) }>
              photo
          </li>
          <li className={ this.state.currentSection === 4 ? 'selected' : '' }
              onClick={ () => this.handleClick('blog-section', 4) }>
              blog
          </li>
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
