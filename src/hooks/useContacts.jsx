import React, { createContext, useContext, useState } from "react";

const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Henri Helvetica",
      username: "HenriHelvetica",
      number: "123-456-7890",
      profilePicture: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Dennis Beatty",
      username: "DennisB",
      number: "234-567-8901",
      profilePicture: "https://via.placeholder.com/150",
    },
  ]);

  const addContact = (contact) => setContacts([...contacts, contact]);

  const updateContact = (id, updatedContact) => {
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  const deleteContact = (id) =>
    setContacts(contacts.filter((contact) => contact.id !== id));

  return (
    <ContactsContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
