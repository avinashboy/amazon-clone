import React from 'react'
import '../css/CheckoutProduct.css'
import { useStateValue } from '../context/StateProvider'
import $ from "jquery";

function CheckoutProduct({ id, title, price, rating, image, hideButton }) {

  const [{basket}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    $(this).addClass('fadeOut')
    // document.getElementById(id).setAttribute("class", "fadeOut")
    dispatch({
      type: 'Remove_from_basket',
      id: id,
    })
    
  }

  return (
    <div className="checkoutProduct" id={id}>
      <img className="checkoutproduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProductt__price"><small>$</small><b>{price}</b></p>
      <div className="checkoutProduct__rating">
        {
          Array(rating)
            .fill()
            .map((_,i) => {
            return <span role="img">⭐</span>
          })
        }
        </div>
         {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
      </div>
    </div>
  )
}

export default CheckoutProduct
