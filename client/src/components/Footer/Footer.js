import React from "react";
import "./Footer.css";

const Footer = props => (
  <footer className="page-footer">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5>contact us</h5>
        <li>Email: <a href = "mailto: team@letsgo.com">team@letsgo.com</a></li>
        <li>Tel: <a href="tel:786-877-5555">786-877-5555</a></li>
      </div>
      <div className="col l4 offset-l2 s12">
        <h5>policies</h5>
        <ul>
          <li><a className="" href="#!">Privacy policy</a></li>
          <li><a className="" href="#!">Terms and conditions</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
    © 2019 LG Corporation
    </div>
  </div>
</footer>
);

export default Footer;