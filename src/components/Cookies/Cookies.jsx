import { useEffect, useState } from "react";
import "./Cookies.scss";

function Cookies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem("cookieConsent", accepted ? "accepted" : "refused");
    setVisible(false);
    // Si besoin, déclenche ici des scripts externes (Google Analytics, etc.)
  };

  if (!visible) return null;
  return (
    <div className="cookiesContainer">
      <div className="cookie-content">
        <h3>Gestion des cookies</h3>
        <p>
          Nous utilisons des cookies à des fins de mesure d’audience et de
          fonctionnement du site. Vous pouvez accepter ou refuser leur
          utilisation.
        </p>
        <div className="cookie-buttons">
          <button onClick={() => handleConsent(true)}>Tout accepter</button>
          <button onClick={() => handleConsent(false)}>Tout refuser</button>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
