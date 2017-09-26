import React from 'react';

const ProductTile = (props) => {
  return (
    <div className="product">
      <div className="image-container">
        <img src={ props.img } alt={ props.alt } />
      </div>
      <h4>{ props.title }</h4>
      <span>{ props.price }</span>
    </div>
  )
}

export default ProductTile;
