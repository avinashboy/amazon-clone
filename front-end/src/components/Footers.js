import React from 'react'
import '../css/Footers.css'

function Footers() {
  const scrollTop = () =>{
   window.scrollTo({top: 0, behavior: 'smooth'});
};
  return (
    <footer>
      <div onClick={scrollTop} className="footer__scrollTop"><span>Back to top</span></div>
      <div className="footer__class summa">
        <div className="add_flexs">
          <div>
           <b>Get to Know Us</b>
           <span>About Us</span> 
           <span>Careers</span> 
           <span>Press Releases</span> 
           <span>Amazon Cares</span> 
           <span>Gift a Smile</span> 
          </div>
          <div>
            <b>Connect with Us</b>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>

          <div>
           <b>Make Money with Us</b>
          <span>Sell on Amazon</span>  
          <span>Sell under Amazon Accelerator</span>  
          <span>Become an Affiliate</span>  
          <span>Fulfilment by Amazon</span>  
          <span>Advertise Your Products</span>  
          <span>Amazon Pay on Merchants</span>  

          </div>
          <div>
          <b>Let Us Help You</b>
          <span>COVID - 19 and Amazon</span>  
          <span>Your Account</span>  
          <span>Returns Centre</span>  
          <span>100 % Purchase Protection</span>  
          <span>Amazon App Download</span>  
          <span>Amazon Assistant Download</span>  
          <span> Help</span> 
          </div>
        </div>
      </div>
      <div className="footer__class summaa" >
        <div className = "footer__class__div add_flex " >

          <div div className="flex__class" >
            <div className="flex__col">
              <span className="ligcolor">AbeBooks</span>
              <span className="drakcolor">Books, art</span>
              <span className="drakcolor">& collectibles</span>
            </div>
            <div className ="flex__col" >
              <span className="ligcolor">Shopbop</span>
              <span className="drakcolor">Designer</span>
              <span className="drakcolor">Fashion Brands</span>
            </div>
          </div>
            
            
            <div className="flex__class">
            <div className="flex__col">
              <span className="ligcolor">Amazon Web Services</span>
              <span className="drakcolor">Scalable Cloud</span>
              <span className="drakcolor">Computing Services</span>
            </div>
            <div className ="flex__col" >
              	<span className="ligcolor">Amazon Business</span>
              	<span className="drakcolor">Everything For</span>
              	<span className="drakcolor">Your Business</span>
            </div>
            </div>
            
         
          
          <div className="flex__class">
            <div className="flex__col">
              	<span className="ligcolor">Audible</span>
              	<span className="drakcolor">Download</span>
              	<span className="drakcolor">Audio Books</span>
            </div>
            <div className ="flex__col" >
            <span className="ligcolor">Prime Now</span>
            <span className="drakcolor">2 - Hour Delivery</span>
            <span className="drakcolor">on Everyday Items</span>
            </div>
          </div>
          <div className="flex__class">
            <div className="flex__col">
              <span className="ligcolor">DPReview</span>
              <span className="drakcolor">Digital</span>
              <span className="drakcolor">Photography</span>
            </div>
            <div className ="flex__col" >
              <span className="ligcolor">Amazon Prime Music</span>
              <span className = "drakcolor" > 60 million songs </span>
            </div>
          </div>
          <div className="flex__class">
            <div className="flex__col">
              <span className="ligcolor">IMDb</span>
              <span className="drakcolor">Movies, TV</span>
              <span className="drakcolor">& Celebrities</span>
            </div>
          </div>
        </div>
        <div div className = "footer__class__div" >
            <p className="footer__class__p greycolor ">
              <span className="lightff">Conditions of Use & Sale</span>
              <span className="lightff">Privacy Notice</span>
              <span className="lightff">Interest-Based Ads</span>
              © {(new Date().getFullYear())}, Amazon Clone</p>
        </div>
      </div>
    </footer>
  )
}

export default Footers
