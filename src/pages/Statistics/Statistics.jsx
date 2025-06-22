// import clientsData from "../../data/clientsData.json";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";
import "./Statistics.scss";

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

  const getDateDiffInDays = (dateStr) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = now - date;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) return;

    const separator = ";";
    const header = Object.keys(data[0]).join(separator);
    const rows = data
      .map((obj) =>
        Object.values(obj)
          .map((val) => (val !== null && val !== undefined ? `"${val}"` : ""))
          .join(separator)
      )
      .join("\n");

    const csv = "\uFEFF" + header + "\n" + rows; // ajout du BOM

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const relaunchClients = clientsData.filter((client) => {
    const days = getDateDiffInDays(client.lastContact);
    return days !== null && days > 30;
  });

  const noContactClients = clientsData.filter((client) => !client.lastContact);

  const latestContacted = [...clientsData]
    .filter((client) => client.lastContact)
    .sort((a, b) => new Date(b.lastContact) - new Date(a.lastContact))
    .slice(0, 10);

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
        {/* <p>
          <span>Total : </span>
          {clientsData.length}
        </p> */}
        <div className="clientsStatus">
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
        </div>
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
                <strong>
                  {client.firstName} <span>{client.lastName}</span>
                </strong>{" "}
                —{" "}
                {new Date(
                  client.lastContact?.toDate?.() || client.lastContact
                ).toLocaleDateString("fr-FR")}{" "}
                — {client.notes}
              </li>
            ))}
        </ul>
        <button
          className="exportCSV"
          onClick={() => exportToCSV(latestContacted, "10-derniers-contactes")}
        >
          Exporter en CSV
        </button>
      </div>

      <div className="relaunchSection">
        <h3>
          {relaunchClients.length <= 1
            ? "Client à relancer (+30 jours)"
            : "Clients à relancer (+30 jours)"}
        </h3>
        <ul>
          {relaunchClients.map((c) => (
            <li key={c.id}>
              <p>
                <strong>
                  <span>{c.firstName}</span> {c.lastName}
                </strong>{" "}
                – Dernier contact :{" "}
                {new Date(c.lastContact).toLocaleDateString("fr-FR")}
              </p>
            </li>
          ))}
        </ul>
        <button
          className="exportCSV"
          onClick={() => exportToCSV(relaunchClients, "clients-a-relancer")}
        >
          Exporter en CSV
        </button>
      </div>

      <div className="noLastContact">
        <h3>
          {clientsData.filter((client) => !client.lastContact).length <= 1
            ? "Client non contacté"
            : "Clients non contactés"}
        </h3>
        {clientsData.filter((client) => !client.lastContact).length === 0 ? (
          <p>Tous les clients ont une date contact.</p>
        ) : (
          <>
            <ul>
              {clientsData
                .filter((client) => !client.lastContact)
                .map((client) => (
                  <li key={client.id}>
                    <span>
                      <strong>
                        <span>{client.firstName}</span> {client.lastName}
                      </strong>{" "}
                      — {client.company}
                    </span>
                  </li>
                ))}
            </ul>
            <button
              className="exportCSV"
              onClick={() =>
                exportToCSV(noContactClients, "clients-sans-contact")
              }
            >
              Exporter en CSV
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Statistics;
