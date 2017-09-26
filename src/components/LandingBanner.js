import React from 'react';

const LandingBanner = () => {
  return (
    <section id="landing-banner">
      <div className="center">
        <h1>sawco.</h1>
        <h2>handmade goods</h2>
        <h2>est. 2017</h2>
      </div>

      <div className="hide-desktop hamburger">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </section>
  )
}

export default LandingBanner;
