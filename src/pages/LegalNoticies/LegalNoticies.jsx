import "./LegalNoticies.scss";

function LegalNoticies() {
  return (
    <div className="legalNoticiesContainer">
      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>
          <strong>Nom de l'entreprise :</strong> MonCRM
          <br />
          <strong>Statut :</strong> Micro-entreprise
          <br />
          <strong>Responsable de la publication :</strong> Frédéric DUBOIS
          <br />
          <strong>Email :</strong> contact@moncrm.fr
          <br />
          <strong>Téléphone :</strong> 06 12 34 56 78
          <br />
          <strong>Adresse :</strong> 125 rue de Verdun, 75006 PARIS,
          France
          <br />
          <strong>SIRET :</strong> 123 456 789 00010
          <br />
          <strong>Code APE :</strong> 6201Z - Programmation informatique
        </p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
        <strong>OVH SAS</strong><br />
        2 rue Kellermann – 59100 Roubaix – France<br />
        <strong>Site web :</strong> <a href="https://www.ovh.com/fr" target="_blank" rel="noopener noreferrer">www.ovh.com</a><br />
        <strong>Téléphone :</strong> 1007 (service client gratuit)
      </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, graphismes, logo,
          etc.) est la propriété exclusive de MonCRM, sauf mention contraire, et
          est protégé par le droit d'auteur. Toute reproduction, distribution ou
          utilisation sans autorisation est interdite.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          MonCRM met tout en œuvre pour fournir des informations fiables, mais
          ne garantit pas l'absence d'erreurs. L'utilisation des informations se
          fait sous la responsabilité de l'utilisateur.
        </p>
      </section>

      <section>
        <h2>Utilisation des données personnelles</h2>
        <p>
          Les données personnelles collectées sont traitées conformément à la{" "}
          <a href="/privacyPolicy">Politique de confidentialité</a>.
          Conformément au RGPD, vous disposez d’un droit d’accès, de
          rectification, de suppression et d’opposition aux données vous
          concernant.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies pour améliorer l’expérience utilisateur et
          réaliser des statistiques.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Pour toute question, vous pouvez nous écrire à l’adresse suivante {" : "}
          <a href="mailto:contact@moncrm.fr">contact@moncrm.fr</a>
        </p>
      </section>
    </div>
  );
}

export default LegalNoticies;
