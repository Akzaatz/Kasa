import React from "react";
import logoFooter from "../assets/img/logoFooter.png";

const Footer = ({ listeDeployee }) => {
  return (
    <div className={`footer ${listeDeployee ? "footer-shifted" : ""}`}>
      <div className="logo-footer">
        <img src={logoFooter} alt="Logo Footer" />
      </div>

      <p>© 2020 Kasa. All rights reserved </p>
    </div>
  );
};

export default Footer;
