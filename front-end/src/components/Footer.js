import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__classs">
          <div className="banner"> <span className="highlgt">Conditions of Use</span>   <span className="highlgt">Privacy Notice</span> <span className="highlgt">Help</span>   </div>
          <div className="amazon_footer_text"> © {(new Date().getFullYear())}, Amazon Clone</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
