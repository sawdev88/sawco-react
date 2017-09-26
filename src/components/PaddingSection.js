import React from 'react';

const PaddingSection = (props) => {
  return (
    <div id={ props.id } className="center-text section-padding">
      <h2>{ props.title }</h2>
      <p>{ props.description }</p>
      { props.children }
    </div>
  )
}

export default PaddingSection;
