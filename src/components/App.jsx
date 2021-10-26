import React from "react";
import Contact from "./Contact";
import contacts from "../contacts";

function CreateContact(contact) {
  return (
    <Contact
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phn={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateContact)}
    </div>
  );
}

export default App;
