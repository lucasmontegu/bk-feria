import React from "react";

import Vincular from "../../assets/images/vincular-logo.png";
import Siglo from "../../assets/images/siglo-logo.png";
import Cordoba from "../../assets/images/cba-logo.png";
import Youtube from "../../assets/icons/footer-youtube.svg";
import Facebook from "../../assets/icons/footer-facebook.svg";
import Instagram from "../../assets/icons/footer-instagram.svg";
import Linkedin from "../../assets/icons/footer-linkedin.svg";
import Twitter from "../../assets/icons/footer-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="container-logos">
              <img className="img-fluid" src={Vincular} alt="Vincular" />
              <img
                className="img-fluid"
                src={Cordoba}
                alt="Provincia de Córdoba"
              />
              <img className="img-fluid" src={Siglo} alt="Siglo 21" />
            </div>
            <div className="container-social-icons social-icons-mobile">
              <a href="/">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="/">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="/">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="/">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="/">
                <img src={Youtube} alt="Yotube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="container-bottom-footer">
              <div className="copyright">
                <span>
                  © 2020 - Universidad Siglo 21 - Todos los derechos reservados
                </span>
              </div>
              <div className="container-social-icons">
                <a href="/">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="/">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="/">
                  <img src={Linkedin} alt="Linkedin" />
                </a>
                <a href="/">
                  <img src={Instagram} alt="Instagram" />
                </a>
                <a href="/">
                  <img src={Youtube} alt="Yotube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
