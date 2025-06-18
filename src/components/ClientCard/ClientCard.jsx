import { FaMobileAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdClose, MdOutlineAlternateEmail } from "react-icons/md";
import Button from "../Button/Button";
import "./ClientCard.scss";

function ClientCard({
  firstName,
  lastName,
  clientFunction,
  clientStatus,
  company,
  mail,
  tel,
  lastContact,
  createAt,
  adress,
  postCode,
  city,
  notes,
}) {
  function openDetails(e) {
    const activeClients = document.querySelectorAll(".showClient");
    const client = e.target
      .closest(".clientCardContainer")
      .querySelector(".showClient");
    activeClients.forEach((activeClient) => {
      if (activeClient.classList.value === "showClient visible") {
        activeClient.classList.toggle("visible");
      }
    });
    const clientsListContainer = document.querySelector(
      ".clientsListContainer .contrastFilter"
    );
    clientsListContainer.classList.toggle("visible");
    client.classList.toggle("visible");
  }

  function closeDetails(e) {
    const client = e.target
      .closest(".clientCardContainer")
      .querySelector(".showClient");
    const clientsListContainer = document.querySelector(
      ".clientsListContainer .contrastFilter"
    );
    clientsListContainer.classList.toggle("visible");

    client.classList.toggle("visible");
  }

  return (
    <div className="clientCardContainer">
      <div className="cardHeader">
        <div className="initials">
          {firstName.substr(0, 1)}
          {lastName.substr(0, 1)}
        </div>
        <div className="clientDetails">
          <div className="name">
            {firstName} <span>{lastName}</span>
          </div>
          <div className="function">
            {clientFunction} - {company}
          </div>
        </div>
        <div
          className="status"
          style={{
            backgroundColor:
              clientStatus === "client"
                ? "#7bffa7"
                : clientStatus === "prospect"
                ? "#f8e263"
                : clientStatus === "ancien client"
                ? "#eb6565"
                : "none",
          }}
        >
          {clientStatus}
        </div>
      </div>
      <div className="clientContacts">
        <a href="mailto: contact@jhdev.fr" className="mail">
          <MdOutlineAlternateEmail /> {mail}
        </a>
        <a href="tel: 0606060606" className="tel">
          <FaMobileAlt /> {tel}
        </a>
        <div className="lastContact">
          <FaRegCalendarAlt /> Dernier contact : {lastContact}
        </div>
      </div>
      <div className="btns">
        <Button content="voir" onClick={openDetails} />
        <Button content="tâches" />
        <Button content="modifier" />
      </div>

      <div className="showClient">
        <div className="showClientHeader">
          <h2>Détails du client</h2>
          <button onClick={closeDetails}>
            <MdClose />
          </button>
        </div>
        <div className="showClientBodyTop">
          <div className="showClientInitials">
            {firstName.substr(0, 1)}
            {lastName.substr(0, 1)}
          </div>
          <div className="showClientName">
            {firstName} {lastName}
          </div>
          <div className="showClientFunction">
            {clientFunction} - {company}
          </div>
        </div>
        <div className="showClientBodyDetails">
          <p>
            <span>Email :</span> <a href="mailto:contact@jhdev.fr">{mail}</a>
          </p>
          <p>
            <span>Téléphone :</span> <a href="tel:0606060606">{tel}</a>
          </p>
          <p>
            <span>Adresse :</span> {adress}, {postCode} {city}
          </p>
          <p>
            <span>Statut :</span> {clientStatus}
          </p>
          <p>
            <span>Créé le :</span> {createAt}
          </p>
          <p>
            <span>Dernier contact le :</span> {lastContact}
          </p>
          <p className="notes">
            <span>Notes :</span>
            <textarea
              name="notes"
              id="notes"
              rows={1}
              defaultValue={notes}
            ></textarea>
          </p>
        </div>
        <div className="btns">
          <Button content="tâches" />
          <Button content="modifier" />
          <Button content="fermer" onClick={closeDetails} />
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
