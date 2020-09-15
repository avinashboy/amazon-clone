import React from 'react'
import '../css/Home.css'
import Products from './Products'
import Carousel from './Carousel'

function Home() {
  return (
    <div className="home">
      <Carousel/>
      {/* <img className="home__image"
      src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" /> */}
      <div className="home__row">
        <Products
        id="1"
        title = "Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)"
        price={499}
        rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71TJA%2BsJv2L._SX466_.jpg" />
        <Products
        id="3"
        title = "Apple iPhone 11 Pro Max (64GB) - Midnight Green"
        price={999}
        rating={5}
        image = "https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SX679_.jpg" />
      </div>

      <div className="home__row" >
        <Products
        id="2"
        title = "New Apple Mac Mini (3.0GHz 6-core 8th-Generation Intel Core i5 Processor, 8GB RAM, 512GB)"
        price={899}
        rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/I/712B4P3yOnL._SX679_.jpg" / >
        <Products
        id="4"
        title = "Dell P Series 24-inch (60.96 cm) Screen Full HD (1080p) LED-Lit Monitor with IPS Panel - P2419H (Black)"
        price={99}
        rating={1}
          image = "https://images-na.ssl-images-amazon.com/images/I/91ddm%2BP-VCL._SX679_.jpg" / >
        <Products
        id="5"
        title = "Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Grey)"
        price={39}
        rating={2}
        image = "https://images-na.ssl-images-amazon.com/images/I/61RyEv5mnNL._SX569_.jpg" / >
      </div>

      <div className="home__row">
        <Products
        id="6"
        title = "Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
        price={1299}
        rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX679_.jpg" / >
        
      </div>

      <div className="home__row" >
        <Products
        id="10"
        title = "Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass-19 February 2018"
        price={29}
        rating={4}
          image = "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg" / >
        <Products
        id="14"
        title = "Permanent Record Paperback – 17 September 2019"
        price={19}
        rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/I/51YOZrqKhBL._SX323_BO1,204,203,200_.jpg "/>
        <Products
        id="15"
        title = "Samsung Galaxy Note 20 Ultra 5G (Mystic Bronze, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
        price={1099}
        rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/I/81afQk-7AjL._SY741_.jpg" / >
        <Products
        id="325"
        title = "Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)"
        price={49}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/51lA7br9YrL._SX679_.jpg" />
      </div>
      
    </div>
  )
}

export default Home
