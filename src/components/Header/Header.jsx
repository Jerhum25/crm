import "./Header.scss";

function Header() {
  return (
    <div className="headerContainer">
      <div className="logo">crm</div>
      <nav>
        <ul>
          <li>
            <a href="/">accueil</a>
          </li>
          <li>
            <a href="clientsList">clients</a>
          </li>
          <li>
            <a href="statistics">statistiques</a>
          </li>
          <li>
            <a href="contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
