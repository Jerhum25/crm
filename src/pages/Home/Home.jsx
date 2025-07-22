import NewClientForm from "../../components/NewClientForm/NewClientForm";
import "./Home.scss";

function accueil() {
  return (
    <div className="HomeContainer">
      <div className="filter"></div>
      <NewClientForm />
    </div>
  );
}

export default accueil;
