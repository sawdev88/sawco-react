import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  commuterList
} from '../../utility';

import {
  InternalBanner,
  PaddingSection,
  ProductList
} from '../';

class CommuterSeries extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="internal">
        <InternalBanner title={ 'commuter series' } />
        <main className="internal-container">
          <PaddingSection description={ 'designed with budget in mind. the commuter series is simple, to the point and badass.' } >
            <ProductList list={ commuterList } />
            <Link className="btn margin-top" to="/">return home</Link>
          </PaddingSection>

          <hr />
        </main>
      </div>
    )
  }
}

export default CommuterSeries;
