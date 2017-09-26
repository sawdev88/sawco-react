import React from 'react';
import { ProductTile } from './index';

const displayList = (list) => {
  if (list) {
    list.map((item, i) => {
      return (
        <div>
          <h2>item.title</h2>
        </div>
      )
    })
  }
}

const ProductList = (props) => {
  return (
    <div className="product-list">
      <div className="flex-row">
        { props.list ?
          props.list.map((item, i) => {
            return (
              <ProductTile
                key={ i }
                small = { item.small }
                img={ item.img }
                alt={ item.title }
                title={ item.title }
                price={ item.price }
              />
            )
          })
          : 'loading' }
      </div>
    </div>
  )
}

export default ProductList;
