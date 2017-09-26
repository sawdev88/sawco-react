import React from 'react';
import { ProductTile } from './index';
import commuterList from '../utility/commuter-list';

const ProductList = (props) => {
  return (
    <div className="product-list">
      <div className="flex-row">

        {commuterList.map((item, i) => {
          return (
            <ProductTile
              key={ i }
              img={ item.img }
              alt={ item.title }
              title={ item.title }
              price={ item.price }
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList;
