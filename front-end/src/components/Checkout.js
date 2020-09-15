import React from 'react'
import { useStateValue } from '../context/StateProvider'
import '../css/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { Link } from 'react-router-dom'


function Checkout() {
  const [{basket, user}] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt=""/>
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is Empty</h2>
          <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
        </div>
      ) : (
            <div>
              <h3>Hello, {user ? user.email.split("@")[0] : 'User'}</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title = { item.title }
              image = { item.image }
              price = { item.price }
              rating={item.rating}
              />
            ))}
        </div>
      )}
      </div>
      
      {user ? (
        basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal/>
        </div>
      )
      ) : (
          <Link to="/login" className="header__link">
          <h2>Login</h2>
        </Link>
      )}
    </div>
  )
}

export default Checkout
