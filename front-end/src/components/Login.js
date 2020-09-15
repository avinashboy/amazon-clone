import React from 'react'
import '../css/Login.css'
import { Link, useHistory } from 'react-router-dom'
import Footer from './Footer'
import { useState } from 'react'
import {auth} from '../fb/fb.js'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
      e.preventDefault() 
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push("/")
        })
        .catch(e => console.warn(e.message))
    }

    const register = (e) => {
      e.preventDefault() 
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push("/")
        })
        .catch(e => console.warn(e.message))

    }
  return (
    <>
    <div className="login">
        <Link to="/">
                <img className="login__logo" src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" alt="" />
      </Link>
      
      <div className="login__container">
        <h1>Sign in</h1>
        <from>
          <h5 className="lead__head">E-mail</h5>
            <input type="text" className="input__flied" value={email} onChange={e => setEmail(e.target.value)} />
          <h5 className="lead__head">Password</h5>
            <input type="password" className="input__flied" value={password} onChange={e => setPassword(e.target.value)} />
           <button onClick={login} className="login__signInButton point" type="submit">Sign In</button>
        </from>

        <p> By continuing, you agree to Amazon 's <span className="highlgt">Conditions of Use</span> and <span className="highlgt">Privacy Notice</span>.</p>

        <hr/>
        <button onClick={register} className="login__registerButton point">Create your Amazon account</button>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default Login
