import React, { useState, useEffect } from 'react'
import '../css/Payment.css'
import { useStateValue } from '../context/StateProvider'
import axioss from 'axios';
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../context/reducer";
import axio from './Axios'
import { db } from "../fb/fb";


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  let [data, setData] = useState()

   const [succeeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // get country name
    axioss.get('https://geolocation-db.com/json/')
      .then(res => {
        setData(res.data.country_name)
      })
      const getClientSecret = async () => {
        const response = await axio({
          method: 'post',
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
  }, [setData, basket])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: `${user.email}`,
          name: `${user.email.split("@")[0]}`,
          address: {
            city: 'Bangalore',
            country: 'US',
            line1: 'xyz',
            state: 'Karnataka'
          }
        }
      }
    }).then(({ paymentIntent }) => {

        db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          })

        setSucceeded(true);
        setError(null)
        setProcessing(false)

        dispatch({
          type: 'EMPTY_BASKET'
        })

        history.replace('/orders')
    })
  }
  
  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

            return (
    <div className='payment'>
                <div className="payment__container">
                  <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
        <div className="payment__section">
          <div className='payment__title'>
              <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
              <p>{user ? user.email : 'User'}</p>
              <p>123 React Lane</p>
              <p>{data}</p>
          </div>
        </div>

        <div className="payment__section">
                    <div className='payment__title'>
                      <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                      {basket.map(item => (
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                        />
                      ))}
                    </div>
        </div>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>

            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                  
                  <div className='payment__priceContainer'>
                      <CurrencyFormat
                          renderText={(value) => (
                              <h3 className="add_space">Order Total: {value}</h3>
                          )}
                          decimalScale={2}
                          value={getBasketTotal(basket)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                      />
                      <button disabled={processing || disabled || succeeded}>
                          <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                      </button>
                    </div>
                    {error && <div>{error}</div>}
              </form>
            </div>
        </div>
      </div>
      
    </div>
  )
}



export default Payment
