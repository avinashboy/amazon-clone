import React from 'react'
import '../css/Headerr.css'
import { Link } from 'react-router-dom'
import Searchicon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../context/StateProvider'
import MenuIcon from '@material-ui/icons/Menu';
import { auth } from '../fb/fb';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {

  const [{ basket, user }] = useStateValue()
  
   const login = () => {
     if (user) {
       auth.signOut()
     }
   }
  return (
    <nav className="header">
      {/* link */}
      <MenuIcon className="header__searchicons" value="All" />
      <Link to="/">
        <img className = "header__logo"
        src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt = "" / >
      </Link>

      {/* search box */}
      <div className="header__search" >
        <ArrowDropDownIcon className="header__searchiconss"/>
        <input type="text" className="header__seachInput"/>
        <Searchicon className="header__searchicon" />
      </div>
      {/* link 3 */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className = "header__option" >
            <span className="header__optionLineOne">Hello, {user ? user.email.split("@")[0] : 'User'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to = "/orders"
        className = "header__link" >
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon/>
            <span className="header__optionLineTwo header__BasketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
