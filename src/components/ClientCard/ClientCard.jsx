import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FaMobileAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdClose, MdOutlineAlternateEmail } from "react-icons/md";
import db from "../../firebase"; // ajuste le chemin selon ton projet
import Button from "../Button/Button";
import "./ClientCard.scss";

function ClientCard({
  clientId,
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
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    clientFunction,
    clientStatus,
    company,
    mail,
    tel,
    lastContact,
    adress,
    postCode,
    city,
    notes,
    createAt,
  });

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

  function closeDetails(e = null) {
    let client;

    if (e?.target?.closest) {
      // Appelé depuis un événement de clic
      client = e.target
        .closest(".clientCardContainer")
        ?.querySelector(".showClient");
    } else {
      // Appelé manuellement (comme après suppression)
      client = document.querySelector(".showClient.visible");
    }

    const clientsListContainer = document.querySelector(
      ".clientsListContainer .contrastFilter"
    );

    if (clientsListContainer?.classList.contains("visible")) {
      clientsListContainer.classList.remove("visible");
    }

    if (client?.classList.contains("visible")) {
      client.classList.remove("visible");
    }

    setIsEditing(false);
  }

  async function saveChanges() {
    try {
      const clientRef = doc(db, "clients", clientId);
      await updateDoc(clientRef, formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur de mise à jour :", error);
    }
  }

async function deleteClient() {
  const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce client ?");

  if (!confirmDelete) return;

  await deleteDoc(doc(db, "clients", clientId)); // Suppression dans Firebase
  onDelete?.(clientId); // Met à jour la liste dans le parent
  closeDetails(); // Masque les détails
}

  const telLink = `tel:${formData.tel}`;
  const mailtoLink = `mailto:${formData.mail}`;

  const formatPhone = (phone) => {
  if (!phone) return "";
  return phone
    .replace(/\D/g, "")           // Enlève tout sauf les chiffres
    .match(/.{1,2}/g)             // Regroupe tous les 2 chiffres
    ?.join(" ")
    .trim() || "";
};

  return (
    <div className="clientCardContainer">
      <div className="cardHeader">
        <div className="initials">
          {formData.firstName?.[0]}
          {formData.lastName?.[0]}
        </div>
        <div className="clientDetails">
          <div className="name">
            {formData.firstName} <span>{formData.lastName}</span>
          </div>
          <div className="function">
            {formData.clientFunction} - {formData.company}
          </div>
        </div>
        <div
          className="status"
          style={{
            backgroundColor:
              formData.clientStatus === "client"
                ? "#7bffa7"
                : formData.clientStatus === "prospect"
                ? "#f8e263"
                : formData.clientStatus === "ancien client"
                ? "#eb6565"
                : "none",
          }}
        >
          {formData.clientStatus}
        </div>
      </div>

      <div className="clientContacts">
        <a href={mailtoLink} className="mail">
          <MdOutlineAlternateEmail /> {formData.mail}
        </a>
        <a href={telLink} className="tel">
          <FaMobileAlt /> {formatPhone(formData.tel)}
        </a>
        <div className="lastContact">
          <FaRegCalendarAlt /> Dernier contact :{" "}
          {formData.lastContact? new Date(formData.lastContact).toLocaleDateString("fr-FR") : "Pas encore contacté"}
        </div>
      </div>

      <div className="btns">
        <Button content="voir la fiche" onClick={openDetails} />
        {/* <Button content="tâches" /> */}
        {/* <Button content="modifier" onClick={() => setIsEditing(true)} /> */}
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
            {formData.firstName?.[0]}
            {formData.lastName?.[0]}
          </div>
          <div className="showClientName">
            {formData.firstName} <span>{formData.lastName}</span>
          </div>
          <div className="showClientFunction">
            {formData.clientFunction} - {formData.company}
          </div>
        </div>

        {isEditing ? (
          <div className="editClientForm">
            <label>
              Prénom :
              <input
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </label>
            <label>
              Nom :
              <input
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </label>
            <label>
              Fonction :
              <input
                value={formData.clientFunction}
                onChange={(e) =>
                  setFormData({ ...formData, clientFunction: e.target.value })
                }
              />
            </label>
            <label>
              Entreprise :
              <input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </label>
            <label>
              Email :
              <input type="email"
                value={formData.mail}
                onChange={(e) =>
                  setFormData({ ...formData, mail: e.target.value })
                }
              />
            </label>
            <label>
              Téléphone :
              <input type="tel"
                value={formData.tel}
                onChange={(e) =>
                  setFormData({ ...formData, tel: e.target.value })
                }
              />
            </label>
            <label>
              Adresse :
              <input
                value={formData.adress}
                onChange={(e) =>
                  setFormData({ ...formData, adress: e.target.value })
                }
              />
            </label>
            <label>
              Code postal :
              <input
                value={formData.postCode}
                onChange={(e) =>
                  setFormData({ ...formData, postCode: e.target.value })
                }
              />
            </label>
            <label>
              Ville :
              <input
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </label>
            <label>
              Dernier contact :
              <input
                type="date"
                value={formData.lastContact}
                onChange={(e) =>
                  setFormData({ ...formData, lastContact: e.target.value })
                }
              />
            </label>
            <label>
              Statut :
              <select
                value={formData.clientStatus}
                onChange={(e) =>
                  setFormData({ ...formData, clientStatus: e.target.value })
                }
              >
                <option value="client">Client</option>
                <option value="prospect">Prospect</option>
                <option value="ancien client">Ancien client</option>
              </select>
            </label>
            <label>
              Notes :
              <textarea
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </label>
          </div>
        ) : (
          <div className="showClientBodyDetails">
            <p>
              <span>Email :</span>{" "}
              <a href={`mailto:${formData.mail}`}>{formData.mail}</a>
            </p>
            <p>
              <span>Téléphone :</span>{" "}
              <a href={`tel:${formData.tel}`}>{formatPhone(formData.tel)}</a>
            </p>
            <p>
              <span>Adresse :</span> {formData.adress}, {formData.postCode}{" "}
              {formData.city}
            </p>
            <p>
              <span>Statut :</span> {formData.clientStatus}
            </p>
            <p>
              <span>Créé le :</span> {formData.createAt}
            </p>
            <p>
              <span>Dernier contact le :</span>{" "}
              {formData.lastContact? new Date(formData.lastContact).toLocaleDateString("fr-FR") : "Pas encore contacté"}
            </p>
            <p className="notes">
              <span>Notes :</span> {formData.notes}
            </p>
          </div>
        )}

        <div className="btns">
          {isEditing ? (
            <>
              <Button content="enregistrer" onClick={saveChanges} />
              <Button content="supprimer" onClick={deleteClient} dataSuppr/>
              <Button content="annuler" onClick={() => setIsEditing(false)} />
            </>
          ) : (
            <>
              <Button content="modifier" onClick={() => setIsEditing(true)} />
              <Button content="fermer" onClick={closeDetails} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
