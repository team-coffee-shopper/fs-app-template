import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">In the late 1970s, a historic pinot noir winery in Oregon had to make cabernet sauvignon from purchased grapes just to pay the bills because, at the time, no one was buying Oregon pinot. They hated doing it because it felt like selling out. But having had the opportunity to taste one of those cabs from the ‘70s, it proves that a wine is a reflection of its maker, because I found the wine is wonderfully well-made, balanced, and long-lived. </p>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li>Cabernet Franc</li>
                  <li>Dolcetto</li>
                  <li>Carignan</li>
                  <li>Zinfandel</li>
                  <li>Cesanese</li>
                  <li>Cabernet Sauvignon</li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Contribute</li>
                  <li>Privacy Policy</li>
                  <li>Sitemap</li>
                </ul>
              </div>
            </div>
            <hr /> 
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2021 Made with love.
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                    <li><FontAwesomeIcon icon={ faCode } /></li>               
                </ul>
              </div>
            </div>
          </div>
    </footer>
    )
}

export default Footer;