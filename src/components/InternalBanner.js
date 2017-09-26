import React from 'react';

const LandingBanner = (props) => {
  return (
    <section id="internal-banner">
      <div className="center">
        <h2>{ props.title }</h2>
      </div>

      <div className="hide-desktop hamburger">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </section>
  )
}

export default LandingBanner;
