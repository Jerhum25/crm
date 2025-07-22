import './Contact.scss';
import React, { useState } from 'react';

function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu peux envoyer les données via email ou API
    alert("Votre message a bien été envoyé.");
    setFormData({ name: "", email: "", message: "" });
  };
   return (
      <div className='contactContainer'>
<h1>Contact</h1>
      <p>Vous pouvez nous contacter via le formulaire ci-dessous ou par les moyens suivants :</p>

      <ul className="contact-infos">
        <li><strong>Email :</strong> contact@toncrm.fr</li>
        <li><strong>Téléphone :</strong> 06 12 34 56 78</li>
        <li><strong>Adresse :</strong> 125 rue de Verdun, 75006 PARIS, France</li>
      </ul>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nom :
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label>
          Email :
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>

        <label>
          Message :
          <textarea
            required
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </label>

        <button type="submit">Envoyer</button>
      </form>

      <p className="privacy-note">
        En soumettant ce formulaire, vous acceptez notre <a href="/privacyPolicy">politique de confidentialité</a>.
      </p>
      </div>
   );
}

export default Contact;