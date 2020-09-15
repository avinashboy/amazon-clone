import React from 'react'
import '../css/Products.css'
import {useStateValue} from '../context/StateProvider'

function Products({ id, title, price, rating, image }) {
  
  const [{basket},dispatch] = useStateValue()
  const addToBasket = () => {
    
    dispatch({
      type: 'Add_to_basket',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    })
  }

  return (
    <div className="product">
      <div className="product__info">
      <p>{title}</p>
      <p className="product__price"><small>$</small><b>{price}</b></p>
      <div className="product__rating">
        {
          Array(rating)
            .fill()
            .map((_) => {
            return <span role="img">⭐</span>
          })
        }
      </div>
      </div>
      
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Products
