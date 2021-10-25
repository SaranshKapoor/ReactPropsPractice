import React from "react";
import Contact from "./Contact";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Contact
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phn={contacts[0].phone}
        email={contacts[0].email}
      />
      <Contact
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phn={contacts[1].phone}
        email={contacts[1].email}
      />
      <Contact
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phn={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
