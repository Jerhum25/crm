import "./PrivacyPoliciy.scss";

function PrivacyPoliciy() {
  const cookiesModal = document.querySelector(".cookiesContainer")
  console.log('test',cookiesModal);
  
  return (
    <div className="privacyPolicyContainer">
      <h1>Politique de confidentialité</h1>

      <section>
        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données est : <strong>MonCRM</strong>
          , représenté par Frédéric DUBOIS, domicilié 125 rue de Verdun, 75006 Paris, joignable à l’adresse e-mail {" : "}
          <a href="mailto:contact@moncrm.fr">contact@moncrm.fr</a>
        </p>
      </section>

      <section>
        <h2>2. Données collectées</h2>
        <p>Les données collectées peuvent inclure :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Nom de l’entreprise</li>
          <li>Historique de contacts ou messages</li>
        </ul>
      </section>

      <section>
        <h2>3. Finalité du traitement</h2>
        <p>Ces données sont collectées afin de :</p>
        <ul>
          <li>Gérer la relation client</li>
          <li>Assurer le suivi commercial</li>
          <li>Réaliser des statistiques internes</li>
          <li>Respecter les obligations légales</li>
        </ul>
      </section>

      <section>
        <h2>4. Destinataires des données</h2>
        <p>
          Les données ne sont communiquées à aucun tiers sans consentement
          explicite. Elles peuvent toutefois être partagées avec des
          prestataires techniques pour le bon fonctionnement du service
          (hébergement, emailing, etc.).
        </p>
      </section>

      <section>
        <h2>5. Durée de conservation</h2>
        <p>
          Les données sont conservées pendant une durée maximale de{" "}
          <strong>3 ans</strong> après le dernier contact actif, sauf obligation
          légale contraire.
        </p>
      </section>

      <section>
        <h2>6. Droits de l’utilisateur</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d’accès</li>
          <li>Droit de rectification</li>
          <li>Droit d’effacement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d’opposition</li>
          <li>Droit à la limitation du traitement</li>
        </ul>
        <p>
          Vous pouvez exercer ces droits en écrivant à :{" "}
          <a href="mailto:contact@moncrm.fr">contact@moncrm.fr</a>
        </p>
      </section>

      <section>
        <h2>7. Sécurité</h2>
        <p>
          MonCRM s’engage à mettre en œuvre toutes les mesures techniques et
          organisationnelles pour garantir la sécurité des données personnelles.
        </p>
      </section>

      <section>
        <h2>8. Cookies</h2>
        <p>
          Pour en savoir plus sur l’usage des cookies, veuillez consulter notre
          page dédiée : <a href="/cookiesPolicy">Cookies</a>.
        </p>
      </section>

      <section>
        <h2>9. Réclamation</h2>
        <p>
          En cas de désaccord, vous pouvez introduire une réclamation auprès de
          la CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cnil.fr
          </a>
          ).
        </p>
      </section>
    </div>
  );
}

export default PrivacyPoliciy;
