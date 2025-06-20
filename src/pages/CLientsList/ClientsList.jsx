import { useEffect, useState } from "react";
import ClientCard from "../../components/ClientCard/ClientCard";
// import clientsData from "../../data/clientsData.json";
import "./ClientsList.scss";

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";

function ClientsList() {
  const [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clients"));
        const clientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        clientsData.sort((a, b) =>
          a.lastName.localeCompare(
            b.lastName,
            "fr" /* , { sensitivity: "base" } */
          )
        );

        setClientsData(clientsData);
      } catch (error) {
        console.error("Erreur de récupération :", error);
      }
    };

    fetchClients();
  }, []);
  return (
    <div className="clientsListContainer">
      <div className="contrastFilter"></div>
      {clientsData.map((item, index) => (
        <ClientCard
          key={index}
          id={item.id}
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
            setClientsData((prevClients) =>
              prevClients.filter((c) => c.id !== id)
            )
          }
        />
      ))}
    </div>
  );
}

export default ClientsList;

// function ClientsList() {
// const [clients, setClients] = useState([]);

// useEffect(() => {
//   const fetchClients = async () => {
//     const querySnapshot = await getDocs(collection(db, "clients"));
//     const clientsData = querySnapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setClients(clientsData);
//   };

//   fetchClients();
// }, []);

//   return (
//     <div className="clientsListContainer">
//       {clients.map((item, index) => (
//         <ClientCard
//           key={index}
//           clientId={item.id}
//           firstName={item.firstName}
//           lastName={item.lastName}
//           company={item.company}
//           clientFunction={item.clientFunction}
//           clientStatus={item.clientStatus}
//           mail={item.mail}
//           tel={item.tel}
//           adress={item.adress}
//           postCode={item.postCode}
//           city={item.city}
//           createAt={item.createAt}
//           lastContact={item.lastContact}
//           notes={item.notes}
//           onDelete={(id) =>
//             setClients(prevClients => prevClients.filter(c => c.id !== id))
//           }
//         />
//       ))}
//     </div>
//   );
// }

// export default ClientsList;
