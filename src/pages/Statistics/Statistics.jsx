// import clientsData from "../../data/clientsData.json";
import "./Statistics.scss";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";

function Statistics() {
    const [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clients"));
        const clientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));        
        setClientsData(clientsData);
      } catch (error) {
        console.error("Erreur de récupération :", error);
      }
    };

    fetchClients();
    
  }, []);

  const calcProspect = (
    (clientsData.filter((client) => client.clientStatus === "prospect").length *
      100) /
    clientsData.length
  ).toFixed(1);
  const calcClients = (
    (clientsData.filter((client) => client.clientStatus === "client").length *
      100) /
    clientsData.length
  ).toFixed(1);
  const calcFormerClients = (
    (clientsData.filter((client) => client.clientStatus === "ancien client")
      .length *
      100) /
    clientsData.length
  ).toFixed(1);

  return (
    <div className="statisticsContainer">
      <h2>statistiques</h2>

      <div className="clientsStats">
        <h3>Répartition par statut </h3>
        <p>
          <span>Total : </span>
          {clientsData.length}
        </p>
        <p>
          <span style={{ backgroundColor: "#f8e263" }}>Prospects</span>
          {
            clientsData.filter((client) => client.clientStatus === "prospect")
              .length
          }
        </p>
        <p>
          <span style={{ backgroundColor: "#7bffa7" }}>Clients</span>
          {
            clientsData.filter((client) => client.clientStatus === "client")
              .length
          }
        </p>
        <p>
          <span style={{ backgroundColor: "#eb6565" }}>Anciens clients</span>
          {
            clientsData.filter(
              (client) => client.clientStatus === "ancien client"
            ).length
          }
        </p>
        <div className="progressBar">
          <div
            className="progressBarProspects"
            style={{
              width: `${calcProspect}%`,
              height: "100%",
              backgroundColor: "#f8e263",
            }}
          >
            {calcProspect}%
          </div>
          <div
            className="progressBarClients"
            style={{
              width: `${calcClients}%`,
              height: "100%",
              backgroundColor: "#7bffa7",
            }}
          >
            {calcClients}%
          </div>
          <div
            className="progressBarFormerClients"
            style={{
              width: `${calcFormerClients}%`,
              height: "100%",
              backgroundColor: "#eb6565",
            }}
          >
            {calcFormerClients}%
          </div>
        </div>
      </div>
      <div className="lastContacts">
  <h3>10 derniers clients contactés</h3>
  <ul>
    {clientsData
      .filter((client) => client.lastContact)
      .sort(
        (a, b) =>
          new Date(b.lastContact?.toDate?.() || b.lastContact) -
          new Date(a.lastContact?.toDate?.() || a.lastContact)
      )
      .slice(0, 10)
      .map((client) => (
        <li key={client.id}>
          <strong>{client.firstName} {client.lastName}</strong> —{" "}
          {new Date(client.lastContact?.toDate?.() || client.lastContact).toLocaleDateString("fr-FR")} —
          {client.notes}
        </li>
      ))}
  </ul>
</div>
<div className="noLastContact">
  <h3>Client(s) non contacté(s)</h3>
  {clientsData.filter((client) => !client.lastContact).length === 0 ? (
    <p>Tous les clients ont une date contact.</p>
  ) : (
    <ul>
      {clientsData
        .filter((client) => !client.lastContact)
        .map((client) => (
          <li key={client.id}>
            <span>
              <strong><span>{client.firstName}</span> {client.lastName}</strong> — {client.company}
            </span>
          </li>
        ))}
    </ul>
  )}
</div>

    </div>
  );
}

export default Statistics;
