import { useEffect, useState } from "react";
import ClientCard from "../../components/ClientCard/ClientCard";
import "./ClientsList.scss";

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";

function ClientsList() {
  const [clientsData, setClientsData] = useState([]);
  const [search, setSearch] = useState(""); // Champ de recherche

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clients"));
        const clients = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        clients.sort((a, b) =>
          a.lastName.localeCompare(b.lastName, "fr")
        );

        setClientsData(clients);
      } catch (error) {
        console.error("Erreur de récupération :", error);
      }
    };

    fetchClients();
  }, []);

  // Filtrage basé sur le champ de recherche
const filteredClients = clientsData.filter((client) => {
  const searchTerm = search
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // supprime les accents

  const name = `${client.firstName || ""} ${client.lastName || ""}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const company = (client.company || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const clientFunction = (client.clientFunction || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return name.includes(searchTerm) || company.includes(searchTerm)|| clientFunction.includes(searchTerm);
});

  return (
    <div className="clientsListContainer">
      <div className="contrastFilter"></div>

      {/* Champ de recherche */}
      <div className="searchBar">
        <input
          type="text"
          placeholder="Rechercher par nom, fonction ou entreprise"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Liste des clients filtrés */}
      {filteredClients.map((item) => (
        <ClientCard
          key={item.id}
          clientId={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          company={item.company}
          clientFunction={item.clientFunction}
          clientStatus={item.clientStatus}
          mail={item.mail}
          tel={item.tel}
          adress={item.adress}
          postCode={item.postCode}
          city={item.city}
          createAt={item.createAt}
          lastContact={item.lastContact}
          notes={item.notes}
          onDelete={(id) =>
            setClientsData((prev) => prev.filter((c) => c.id !== id))
          }
        />
      ))}
    </div>
  );
}

export default ClientsList;
