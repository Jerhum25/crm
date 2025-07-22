import "./CookiesPolicy.scss";

function CookiesPolicy() {
  return (
    <div className="cookiesPolicyContainer">
      <h1>Politique de cookies</h1>

      <p>
        Cette page explique comment nous utilisons les cookies sur le site{" "}
        <strong>crm.fr</strong> et comment vous pouvez les contrôler.
      </p>

      <h2>Qu’est-ce qu’un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal
        (ordinateur, tablette, smartphone) lors de la visite d’un site internet.
        Il permet au site de vous reconnaître lors de vos prochaines visites, de
        mémoriser vos préférences, ou de suivre votre navigation à des fins
        statistiques ou publicitaires.
      </p>

      <h2>Quels cookies utilisons-nous ?</h2>
      <p>Nous utilisons plusieurs types de cookies :</p>
      <ul>
        <li>
          <strong>Cookies essentiels</strong> : nécessaires au bon
          fonctionnement du site (ex : session utilisateur).
        </li>
        <li>
          <strong>Cookies de mesure d’audience</strong> : pour analyser la
          fréquentation du site via des outils comme Google Analytics.
        </li>
        <li>
          <strong>Cookies de préférences</strong> : pour mémoriser vos choix de
          navigation ou vos informations saisies dans un formulaire.
        </li>
      </ul>

      <h2>Consentement</h2>
      <p>
        Lors de votre première visite, une bannière vous informe de
        l’utilisation de cookies. Vous pouvez accepter ou refuser l’installation
        des cookies non essentiels. Votre choix est conservé pendant 12 mois.
      </p>

      <h2>Gestion des cookies</h2>
      <p>
        Vous pouvez à tout moment modifier vos préférences via un lien en bas de
        page ou configurer votre navigateur pour bloquer les cookies :
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/fr/kb/autoriser-bloquer-cookies-preferences-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/fr-fr/help/4027947/windows-delete-cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edge / Internet Explorer
          </a>
        </li>
      </ul>

      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données collectées via les cookies est
        :<br />
        Frédéric DUBOIS – <a href="mailto:contact@moncrm.fr">contact@moncrm.fr</a>
      </p>

      <h2>Modification de la politique</h2>
      <p>
        Cette politique de cookies peut être modifiée à tout moment pour rester
        conforme à la législation en vigueur. Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {month:"long"})} {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default CookiesPolicy;
