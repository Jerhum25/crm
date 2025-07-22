import './Footer.scss';
import React from 'react';

function Footer() {
   return (
      <div className='footerContainer'>
<div className="footerContent">
    <p>&copy; {new Date().getFullYear()} JHdev - Tous droits réservés</p>
    <nav className="footerLinks">
      <a href="/legalNoticies" target="_blank" rel="noopener noreferrer">Mentions légales</a>
      <a href="/generalConditions" target="_blank" rel="noopener noreferrer">CGV</a>
      <a href="/privacyPolicy" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a>
      <a href="/cookiesPolicy" target="_blank" rel="noopener noreferrer">Cookies</a>
      <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
    </nav>
  </div>
      </div>
   );
}

export default Footer;