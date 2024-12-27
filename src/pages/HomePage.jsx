import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactList from "../components/ContactList";
import { useContacts } from "../hooks/useContacts";

const HomePage = () => {
  const { contacts } = useContacts();
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.username.toLowerCase().includes(search.toLowerCase()) ||
      contact.number.includes(search)
  );

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded">
          New Contact
        </Link>
      </header>
      <input
        type="text"
        placeholder="Search by name, username, or number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 mb-4"
      />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default HomePage;
