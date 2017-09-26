import React, { Component } from 'react';
import './app.min.css';
import { SiteNavigation, LandingBanner } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <SiteNavigation />

        <main id="container">
          <LandingBanner />
        </main>
      </div>
    );
  }
}

export default App;
