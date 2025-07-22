// import Button from "../Button/Button";
// import "./NewClientForm.scss";
// function NewClientForm() {
//   return (
//     <div className="newClientFormContainer">
//       <form action="">
//         <h2>ajouter un client</h2>
//         <div className="row">
//           <div>
//             <label htmlFor="firstName" data-required>prénom</label>
//             <input type="text" name="firstName" id="firstName" required/>
//           </div>
//           <div>
//             <label htmlFor="lastName" data-required>nom</label>
//             <input type="text" name="lastName" id="lastName" required/>
//           </div>
//         </div>
//         <div className="row">
//           <div>
//             <label htmlFor="mail" data-required>email</label>
//             <input type="mail" name="mail" id="mail" required/>
//           </div>
//           <div>
//             <label htmlFor="tel" data-required>téléphone</label>
//             <input type="tel" name="tel" id="tel" required/>
//           </div>
//         </div>
//         <div className="row">
//           <div>
//             <label htmlFor="company" data-required>entreprise</label>
//             <input type="text" name="company" id="company" required/>
//           </div>
//           <div>
//             <label htmlFor="function" data-required>fonction</label>
//             <input type="text" name="function" id="function" required/>
//           </div>
//         </div>
//         <div className="row status">
//           <div>
//             <label htmlFor="status" data-required>statut</label>
//             <select name="status" id="status"required>
//               <option value="prospect">prospect</option>
//               <option value="client">client</option>
//               {/* <option value="formerClient">ancien client</option> */}
//             </select>
//           </div>
//         </div>
//         <div className="row address">
//           <div className="street">
//             <label htmlFor="address" data-required>adresse</label>
//             <input type="text" name="address" id="address" required/>
//           </div>
//           <div className="city">
//             <div>
//               <label htmlFor="postCode" data-required>code postal</label>
//               <input type="number" name="postCode" id="postCode" required/>
//             </div>
//             <div>
//               <label htmlFor="city" data-required>ville</label>
//               <input type="text" name="city" id="city" required/>
//             </div>
//           </div>
//         </div>
//         <div className="row notes">
//           <div>
//             <label htmlFor="notes">notes</label>
//             <textarea
//               type="text"
//               name="notes"
//               id="notes"
//               rows={4}
//               placeholder="Notes sur le contact"

//             ></textarea>
//           </div>
//         </div>
//         <div className="buttons">
//           <Button content="créer le contact" />
//           <Button content="annuler" />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default NewClientForm;

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import db from "../../firebase"; // adapte le chemin selon ton arborescence
import Button from "../Button/Button";
import "./NewClientForm.scss";

function NewClientForm() {
  const [formData, setFormData] = useState({
    firstName: "",
        lastName: "",
        mail: "",
        tel: "",
        company: "",
        clientFunction: "",
        clientStatus: "prospect",
        adress: "",
        postCode: "",
        city: "",
        notes: "",
        createAt: new Date().toLocaleDateString("fr-FR"),
        lastContact: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "clients"), {
        ...formData,
        createAt: new Date().toLocaleDateString("fr-FR"),
        lastContact: null, // ou serverTimestamp() si souhaité
      });

      alert("Client ajouté avec succès !");
      setFormData({
        // reset formulaire
        firstName: "",
        lastName: "",
        mail: "",
        tel: "",
        company: "",
        clientFunction: "",
        clientStatus: "",
        adress: "",
        postCode: "",
        city: "",
        notes: "",
        createAt: new Date().toLocaleDateString("fr-FR"),
        lastContact: null,
      });
    } catch (error) {
      console.error("Erreur ajout client :", error);
      alert("Erreur lors de l'ajout.");
    }
  };

  return (
    <div className="newClientFormContainer">
      <form onSubmit={handleSubmit}>
        <h2>ajouter un client</h2>
        <div className="row">
          <div>
            <label htmlFor="firstName" data-required>
              prénom
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" data-required>
              nom
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="mail" data-required>
              email
            </label>
            <input
              type="email"
              name="mail"
              id="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tel" data-required>
              téléphone
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="company" data-required>
              entreprise
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="clientFunction" data-required>
              fonction
            </label>
            <input
              type="text"
              name="clientFunction"
              id="clientFunction"
              value={formData.clientFunction}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row status">
          <div>
            <label htmlFor="clientStatus" data-required>
              statut
            </label>
            <select
              name="clientStatus"
              id="clientStatus"
              value={formData.clientStatus}
              onChange={handleChange}
              required
            >
              <option value="prospect">prospect</option>
              <option value="client">client</option>
            </select>
          </div>
        </div>

        <div className="row adress">
          <div className="street">
            <label htmlFor="adress" data-required>
              adresse
            </label>
            <input
              type="text"
              name="adress"
              id="adress"
              value={formData.adress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="city">
            <div>
              <label htmlFor="postCode" data-required>
                code postal
              </label>
              <input
                type="number"
                name="postCode"
                id="postCode"
                value={formData.postCode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="city" data-required>
                ville
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row notes">
          <div>
            <label htmlFor="notes">notes</label>
            <textarea
              name="notes"
              id="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Notes sur le contact"
            ></textarea>
          </div>
        </div>

        <div className="buttons">
          <Button content="créer le contact" />
          {/* <Button content="annuler" onClick={()=>document.querySelector("form").reset()}/> */}
        </div>
      </form>
    </div>
  );
}

export default NewClientForm;
