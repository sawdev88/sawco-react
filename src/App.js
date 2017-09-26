import React, { Component } from 'react';
import './app.min.css';
import {
  LandingNavigation,
  LandingBanner,
  PaddingSection,
  ProductList
} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <LandingNavigation />

        <main id="container">
          <LandingBanner />
          <PaddingSection
            id={ 'about' }
            title={ 'motorcycles · bicycles · beer · coffee · music' }
            description={
              'sawco. is a passion project created to deliver top notch afforable goods to rad people. Inspired by things things that keep us exploring and take us out of our comfort zone. sawco is designed to be simple, modern and always handmade. somestimes, simple is more.'
            }>
            <h5>proudly made in san diego, ca</h5>
          </PaddingSection>

        <hr/>

          <PaddingSection
            id={ 'commuter-section' }
            title={ 'commuter section' }
            description={
              'designed with budget in mind. the commuter series is simple, to the point and badass.'
          }>

          <ProductList />
          </PaddingSection>


        </main>
      </div>
    );
  }
}

export default App;
