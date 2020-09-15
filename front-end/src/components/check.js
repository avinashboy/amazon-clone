import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement ,useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from'./axios';
import {db} from './firebase';
function Payment() {
    const [{basket, user},dispatch] = useStateValue();
  const history = useHistory();
  
    const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  
    const stripe  =useStripe();
  const elements = useElements();
  
    const [succeeded,setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
       const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total = ${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
       }
       getClientSecret();
        //generate the speciale stripe secret charging customer
    }, [basket])
    console.log('the secret is >>', clientSecret);
    console.log('>>', user)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        //const payload = await stripe 
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
        }).then(({paymentIntent}) => {
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
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment_container" >
                <h1>checkout
                     ( <Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/*deleivery */}
                <div className="payment_section">
                        <div className="payment_title">
                            <h3 >Delivery Address</h3>
                        </div>
                        <div className="payment_address">
                            <p>{user?.email}</p>
                            <p>123 React world</p>
                            <p>Los Angeles, CA</p>
                        </div>
                </div>
                <div className="payment_section">
                 < div className="payment_title">
                    <h3>Review Items And Delivery</h3>
                 </div>
                 <div className="payment_items">
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
                <div className="payment_section">
                  < div className="payment_title">
                      <h3>Payment Method</h3>
                  </div>
                  <div className="payment_details">
                     <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment_priceContainer">
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error} </div>}
                     </form>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Payment