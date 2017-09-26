import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  commuterList,
  homeList,
  photoList
} from '../../utility';

import {
  LandingNavigation,
  LandingBanner,
  PaddingSection,
  ProductList,
} from '../../components';

class Homepage extends Component {
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
            'sawco. is a passion project created to deliver top notch afforable goods to rad people. Inspired by things things that keep us exploring and take us out of our comfort zone. sawco is designed to be simple, modern and always handmade. somestimes, simple is more.' }>
          <h5>proudly made in san diego, ca</h5>
        </PaddingSection>

        <hr/>

        <PaddingSection
          id={ 'commuter-section' }
          title={ 'commuter series' }
          description={
            'designed with budget in mind. the commuter series is simple, to the point and badass.' }>

          <ProductList list={ commuterList.slice(0, 4) } />
          <Link className="btn" to="/commuter-series">view series</Link>
        </PaddingSection>

        <hr/>

        <PaddingSection
          id={ 'home-section' }
          title={ 'home series' }
          description={
            'cool stuff for cool people.' }>

          <ProductList list={ homeList.slice(0, 3) } />
          <a className="btn" href="#">view series</a>
        </PaddingSection>

        <hr/>

        <PaddingSection
          id={ 'photo-section' }
          title={ '· photo ·' }
          description={ 'life & times.' }>

            <ProductList list={ photoList.slice(0, 4) } />
          <a className="btn" href="#">view collection</a>
        </PaddingSection>

        <hr/>

        <PaddingSection
          id={ 'blog-section' }
          title={ '· blog ·' } >
        </PaddingSection>

        <hr/>
      </main>
    </div>
    )
  }
}

export default Homepage;
